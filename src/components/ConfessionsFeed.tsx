
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Pause, Eye, Clock } from 'lucide-react';

interface Confession {
  id: string;
  title: string;
  content: string;
  preview: string;
  age: number;
  gender: string;
  timePosted: string;
  audioUrl?: string;
  avatarColor: string;
}

const ConfessionsFeed = () => {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Mock data (in a real app, this would come from an API or JSON file)
  useEffect(() => {
    const mockConfessions: Confession[] = [
      {
        id: '1',
        title: 'I lied about my college degree for 5 years',
        content: 'I never actually graduated college but I\'ve been telling everyone, including my employer, that I have a bachelor\'s degree. I\'ve been living with this lie for 5 years now and I don\'t know how to come clean. The guilt is eating me alive, especially since I got promoted based on this false qualification. I keep thinking someone will find out and my whole life will come crashing down. I\'ve become really good at my job though, so maybe the degree doesn\'t even matter anymore? But the lie feels like it\'s growing bigger every day.',
        preview: 'I never actually graduated college but I\'ve been telling everyone, including my employer, that I have a bachelor\'s degree...',
        age: 28,
        gender: 'M',
        timePosted: '2 hours ago',
        audioUrl: undefined,
        avatarColor: 'bg-blue-500'
      },
      {
        id: '2',
        title: 'I\'m in love with my best friend\'s spouse',
        content: 'This is tearing me apart inside. My best friend of 10 years married the most amazing person I\'ve ever met, and I can\'t stop thinking about them. It started as just admiration, but over the past year it\'s grown into something much deeper. I catch myself looking forward to group hangouts just to see them, and I feel guilty every single time. I would never act on these feelings because I value my friendship too much, but it\'s becoming harder to be around them. I\'m considering distancing myself from the group, but that would raise questions I can\'t answer.',
        preview: 'This is tearing me apart inside. My best friend of 10 years married the most amazing person I\'ve ever met...',
        age: 31,
        gender: 'F',
        timePosted: '4 hours ago',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        avatarColor: 'bg-pink-500'
      },
      {
        id: '3',
        title: 'I secretly hate my "dream job"',
        content: 'Everyone thinks I\'m living the dream. I work at a prestigious tech company, make great money, and everyone congratulates me on "making it." But I absolutely hate going to work every day. The culture is toxic, my manager micromanages everything, and I feel like just a cog in a machine. I used to be passionate about technology, but this job has sucked all the joy out of it. I stay because the money is good and it looks great on my resume, but I feel like I\'m slowly dying inside. My family is so proud of me that I can\'t bear to tell them how miserable I am.',
        preview: 'Everyone thinks I\'m living the dream. I work at a prestigious tech company, make great money...',
        age: 26,
        gender: 'M',
        timePosted: '6 hours ago',
        audioUrl: undefined,
        avatarColor: 'bg-green-500'
      },
      {
        id: '4',
        title: 'I accidentally read my daughter\'s diary',
        content: 'I was cleaning my 16-year-old daughter\'s room and knocked over a book. Pages fell out and I saw it was her diary. I know I should have just put it back, but I saw my name and couldn\'t help myself. What I read broke my heart. She wrote about how she feels like I don\'t understand her and that she\'s struggling with anxiety and depression. She also mentioned that she\'s been cutting herself. I\'m devastated that I didn\'t know she was going through this, but I can\'t tell her I read her diary. I don\'t know how to help her without admitting I violated her privacy. I\'ve been trying to be more attentive and supportive, but I feel like I\'m walking on eggshells.',
        preview: 'I was cleaning my 16-year-old daughter\'s room and knocked over a book. Pages fell out...',
        age: 45,
        gender: 'F',
        timePosted: '8 hours ago',
        audioUrl: undefined,
        avatarColor: 'bg-orange-500'
      },
      {
        id: '5',
        title: 'I\'ve been stealing from my workplace',
        content: 'It started small - just some office supplies here and there. But over the past year, it\'s escalated. I work at a retail store and I\'ve been taking items, changing prices in the system, and even pocketing cash from returns. I tell myself I deserve it because they pay me barely above minimum wage, but I know it\'s wrong. I\'ve probably taken around $2000 worth of stuff and money. The worst part is that they\'re investigating inventory discrepancies and I\'m terrified they\'ll figure out it\'s me. I want to stop but I\'ve already gone too far. If they catch me, I\'ll not only lose my job but probably face criminal charges.',
        preview: 'It started small - just some office supplies here and there. But over the past year, it\'s escalated...',
        age: 23,
        gender: 'F',
        timePosted: '12 hours ago',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        avatarColor: 'bg-red-500'
      },
      {
        id: '6',
        title: 'I\'m secretly glad my toxic friend moved away',
        content: 'My friend of 8 years moved across the country for a job, and while I acted sad and supportive, I\'m actually relieved. She was becoming increasingly toxic and manipulative. She would always make our conversations about herself, guilt-trip me when I couldn\'t hang out, and criticize my other relationships. She had a way of making me feel bad about myself and my choices. I was too conflict-averse to confront her or end the friendship, so when she announced she was moving, I felt like I was being set free. I feel guilty for feeling this way because she genuinely thinks we\'re best friends, but my mental health has improved so much since she left.',
        preview: 'My friend of 8 years moved across the country for a job, and while I acted sad and supportive...',
        age: 29,
        gender: 'F',
        timePosted: '1 day ago',
        audioUrl: undefined,
        avatarColor: 'bg-purple-500'
      }
    ];
    setConfessions(mockConfessions);
  }, []);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const toggleAudio = (audioUrl: string, confessionId: string) => {
    if (playingAudio === confessionId) {
      currentAudio?.pause();
      setPlayingAudio(null);
      setCurrentAudio(null);
    } else {
      currentAudio?.pause();
      const audio = new Audio(audioUrl);
      audio.play();
      setPlayingAudio(confessionId);
      setCurrentAudio(audio);
      
      audio.onended = () => {
        setPlayingAudio(null);
        setCurrentAudio(null);
      };
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const getInitials = (gender: string) => {
    return gender === 'M' ? 'M' : 'F';
  };

  return (
    <section id="confessions-feed" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Confessions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real people. Read them, listen to them, feel them.
          </p>
        </div>

        {/* Confessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {confessions.slice(0, visibleCount).map((confession, index) => (
            <Card 
              key={confession.id} 
              className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarFallback className={`${confession.avatarColor} text-white font-semibold`}>
                      {getInitials(confession.gender)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{confession.gender}, {confession.age}</span>
                      <Clock className="w-3 h-3 mx-2" />
                      <span>{confession.timePosted}</span>
                    </div>
                  </div>
                  {confession.audioUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAudio(confession.audioUrl!, confession.id)}
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-2"
                    >
                      {playingAudio === confession.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                  {confession.title}
                </h3>

                {/* Content */}
                <div className="text-gray-300 mb-4">
                  {expandedCards.has(confession.id) ? (
                    <p className="text-sm leading-relaxed">{confession.content}</p>
                  ) : (
                    <p className="text-sm leading-relaxed line-clamp-3">{confession.preview}</p>
                  )}
                </div>

                {/* Audio Player */}
                {confession.audioUrl && (
                  <div className="mb-4">
                    <audio 
                      controls 
                      className="w-full h-8 rounded bg-gray-700"
                      style={{ accentColor: '#a855f7' }}
                    >
                      <source src={confession.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(confession.id)}
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-0 h-auto font-medium"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {expandedCards.has(confession.id) ? 'Show Less' : 'Read Full'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < confessions.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Load More Confessions
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConfessionsFeed;
