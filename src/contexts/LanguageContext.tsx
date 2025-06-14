import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn' | 'ml' | 'or' | 'pa' | 'as' | 'ur';

interface Translations {
  [key: string]: {
    [key in Language]?: string; // Made language optional in translations to reflect 'en' focus
  };
}

const translations: Translations = {
  // Hero Section
  'hero.tagline1': {
    en: 'Read Raw, Real Anonymous Confessions',
    hi: 'कच्ची, वास्तविक गुमनाम कबुलियां पढ़ें',
    ta: 'மூல, உண்மையான அநாமதேய ஒப்புதல்களைப் படியுங்கள்',
    te: 'ముడి, నిజమైన అనామక ఒప్పుకోలులను చదవండి',
    bn: 'কাঁচা, সত্যিকারের বেনামী স্বীকারোক্তি পড়ুন',
    mr: 'कच्चे, खरे अनामिक कबुलीजबाब वाचा',
    gu: 'કાચા, સાચા અનામી કબૂલાત વાંચો',
    kn: 'ಕಚ್ಚಾ, ನಿಜವಾದ ಅನಾಮಧೇಯ ಒಪ್ಪಿಗೆಗಳನ್ನು ಓದಿ',
    ml: 'അസംസ്കൃത, യഥാർത്ഥ അജ്ഞാത കുറ്റസമ്മതങ്ങൾ വായിക്കുക',
    or: 'କଞ୍ଚା, ପ୍ରକୃତ ଅଜ୍ଞାତ ସ୍ୱୀକାରୋକ୍ତି ପଢ଼ନ୍ତୁ',
    pa: 'ਕੱਚੇ, ਅਸਲੀ ਗੁਮਨਾਮ ਇਕਬਾਲ ਪੜ੍ਹੋ',
    as: 'কেঁচা, প্ৰকৃত নামহীন স্বীকাৰোক্তি পঢ়ক',
    ur: 'خام، حقیقی گمنام اعترافات پڑھیں'
  },
  'hero.subtitle': {
    en: 'Unfiltered voices. No signups. Just the truth. Real stories that matter.',
    hi: 'बिना फिल्टर की आवाजें। कोई साइनअप नहीं। सिर्फ सच्चाई। महत्वपूर्ण कहानियां।',
    ta: 'வடிகட்டப்படாத குரல்கள். பதிவுகள் இல்லை. வெறும் உண்மை. முக்கியமான கதைகள்.',
    te: 'ఫిల్టర్ చేయని గాత్రలు. సైన్ అప్‌లు లేవు. కేవలం సత్యం. ముఖ్యమైన కథలు.',
    bn: 'অফিল্টার কণ্ঠস্বর। কোনো সাইন আপ নেই। শুধু সত্য। গুরুত্বপূর্ণ গল্প।',
    mr: 'अनफिल्टर आवाज। साइनअप नाही। फक्त सत्य। महत्त्वाच्या गोष्टी।',
    gu: 'અનફિલ્ટર અવાજો. કોઈ સાઇન અપ નથી. માત્ર સત્yat. મહત્વપૂર્ણ વાર્તાઓ.',
    kn: 'ಫಿಲ್ಟರ್ ಮಾಡದ ಧ್ವನಿಗಳು. ಸೈನ್ ಅಪ್ ಇಲ್ಲ. ಕೇವಲ ಸತ್ಯ. ಪ್ರಮುಖ ಕಥೆಗಳು.',
    ml: 'ഫിൽട്ടർ ചെയ്യാത്ത ശബ്ദങ്ങൾ. സൈൻ അപ്പുകളില്ല. വെറും സത്യം. പ്രധാനപ്പെട്ട കഥകൾ.',
    or: 'ଅନଫିଲ୍ଟର ସ୍ୱର। କୌଣସି ସାଇନ ଅପ ନାହିଁ। କେବଳ ସତ୍ୟ। ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କାହାଣୀ।',
    pa: 'ਅਨਫਿਲਟਰ ਆਵਾਜ਼ਾਂ। ਕੋਈ ਸਾਈਨ ਅਪ ਨਹੀਂ। ਸਿਰਫ਼ ਸੱਚ। ਮਹੱਤਵਪੂਰਨ ਕਹਾਣੀਆਂ।',
    as: 'অনফিল্টাৰ মাত। কোনো ছাইন আপ নাই। কেৱল সত্য। গুৰুত্বপূৰ্ণ কাহিনী।',
    ur: 'غیر فلٹر شدہ آوازیں۔ کوئی سائن اپ نہیں۔ صرف سچ۔ اہم کہانیاں۔'
  },
  'hero.browse': {
    en: 'Browse Confessions',
    hi: 'कबुलियां ब्राउज़ करें',
    ta: 'ஒப்புதல்களை உலாவுக',
    te: 'ఒప్పుకోలులను బ్రౌజ్ చేయండి',
    bn: 'স্বীকারোক্তি ব্রাউজ করুন',
    mr: 'कबुलीजबाब ब्राउझ करा',
    gu: 'કબૂલાત બ્રાઉઝ કરો',
    kn: 'ಒಪ್ಪಿಗೆಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ',
    ml: 'കുറ്റസമ്മതങ്ങൾ ബ്രൗസ് ചെയ്യുക',
    or: 'ସ୍ୱୀକାରୋକ୍ତି ବ୍ରାଉଜ କରନ୍ତୁ',
    pa: 'ਇਕਬਾਲ ਬ੍ਰਾਊਜ਼ ਕਰੋ',
    as: 'স্বীকাৰোক্তি ব্ৰাউজ কৰক',
    ur: 'اعترافات براؤز کریں'
  },
  'hero.submit': {
    en: 'Submit Your Confession',
    hi: 'अपनी कबुली जमा करें',
    ta: 'உங்கள் ஒப்புதலைச் சமர்பிக்கவும்',
    te: 'మీ ఒప్పుకోలును సమర్పించండి',
    bn: 'আপনার স্বীকারোক্তি জমা দিন',
    mr: 'तुमची कबुलीजबाब सबमिट करा',
    gu: 'તમારી કબૂલાત સબમિટ કરો',
    kn: 'ನಿಮ್ಮ ಒಪ್ಪಿಗೆಯನ್ನು ಸಲ್ಲಿಸಿ',
    ml: 'നിങ്ങളുടെ കുറ്റസമ്മതം സമർപ്പിക്കുക',
    or: 'ଆପଣଙ୍କ ସ୍ୱୀକାରୋକ୍ତି ଦାଖଲ କରନ୍ତୁ',
    pa: 'ਆਪਣਾ ਇਕਬਾਲ ਸਪੁਰਦ ਕਰੋ',
    as: 'আপোনাৰ স্বীকাৰোক্তি দাখিল কৰক',
    ur: 'اپنا اعتراف جمع کریں'
  },
  // Feed Section
  'feed.title': {
    en: 'Recent Confessions',
    hi: 'हालिया कबुलियां',
    ta: 'சமீபத்திய ஒப்புதல்கள்',
    te: 'ఇటీవలి ఒప్పుకోలులు',
    bn: 'সাম্প্রতিক স্বীকারোক্তি',
    mr: 'अलीकडील कबुलीजबाब',
    gu: 'તાજેતરની કબૂલાત',
    kn: 'ಇತ್ತೀಚಿನ ಒಪ್ಪಿಗೆಗಳು',
    ml: 'സമീപകാല കുറ്റസമ്മതങ്ങൾ',
    or: 'ସମ୍ପ୍ରତି ସ୍ୱୀକାରୋକ୍ତି',
    pa: 'ਹਾਲੀਆ ਇਕਬਾਲ',
    as: 'শেহতীয়া স্বীকাৰোক্তি',
    ur: 'حالیہ اعترافات'
  },
  'feed.subtitle': {
    en: 'Real stories from real people. Read them, listen to them, feel them.',
    hi: 'असली लोगों की असली कहानियां। उन्हें पढ़ें, सुनें, महसूस करें।',
    ta: 'உண்மையான மக்களின் உண்மையான கதைகள். அவற்றைப் படியுங்கள், கேளுங்கள், உணருங்கள்.',
    te: 'నిజమైన వ్యక్తుల నిజమైన కథలు. వాటిని చదవండి, వినండి, అనుభవించండి.',
    bn: 'সত্যিকারের মানুষের সত্যিকারের গল্প। সেগুলো পড়ুন, শুনুন, অনুভব করুন।',
    mr: 'खऱ्या लोकांच्या खऱ्या गोष्टी। त्या वाचा, ऐका, जाणवा।',
    gu: 'સાચા લોકોની સાચી વાર્તાઓ. તેમને વાંચો, સાંભળો, અનુભવો.',
    kn: 'ನಿಜವಾದ ಜನರ ನಿಜವಾದ ಕಥೆಗಳು. ಅವುಗಳನ್ನು ಓದಿ, ಕೇಳಿ, ಅನುಭವಿಸಿ.',
    ml: 'യഥാർത്ഥ ആളുകളുടെ യഥാർത്ഥ കഥകൾ. അവ വായിക്കുക, കേൾക്കുക, അനുഭവിക്കുക.',
    or: 'ପ୍ରକୃତ ଲୋକଙ୍କ ପ୍ରକୃତ କାହାଣୀ। ସେଗୁଡ଼ିକୁ ପଢ଼ନ୍ତୁ, ଶୁଣନ୍ତୁ, ଅନୁଭବ କରନ୍ତୁ।',
    pa: 'ਅਸਲੀ ਲੋਕਾਂ ਦੀਆਂ ਅਸਲੀ ਕਹਾਣੀਆਂ। ਉਨ੍ਹਾਂ ਨੂੰ ਪੜ੍ਹੋ, ਸੁਣੋ, ਮਹਿਸੂਸ ਕਰੋ।',
    as: 'প্ৰকৃত মানুহৰ প্ৰকৃত কাহিনী। সেইবোৰ পঢ়ক, শুনক, অনুভৱ কৰক।',
    ur: 'حقیقی لوگوں کی حقیقی کہانیاں۔ انہیں پڑھیں، سنیں، محسوس کریں۔'
  },
  'card.readFull': {
    en: 'Read Full',
    hi: 'पूरा पढ़ें',
    ta: 'முழுமையாக படியுங்கள்',
    te: 'పూర్తిగా చదవండి',
    bn: 'সম্পূর্ণ পড়ুন',
    mr: 'पूर्ण वाचा',
    gu: 'સંપૂર્ણ વાંચો',
    kn: 'ಸಂಪೂರ್ಣ ಓದಿ',
    ml: 'പൂർണ്ണമായി വായിക്കുക',
    or: 'ସମ୍ପୂର୍ଣ୍ଣ ପଢ଼ନ୍ତୁ',
    pa: 'ਪੂਰਾ ਪੜ੍ਹੋ',
    as: 'সম্পূৰ্ণ পঢ়ক',
    ur: 'مکمل پڑھیں'
  },
  'card.showLess': {
    en: 'Show Less',
    hi: 'कम दिखाएं',
    ta: 'குறைவாக காட்டுக',
    te: 'తక్కువ చూపించు',
    bn: 'কম দেখান',
    mr: 'कमी दाखवा',
    gu: 'ઓછું બતાવો',
    kn: 'ಕಡಿಮೆ ತೋರಿಸಿ',
    ml: 'കുറച്ച് കാണിക്കുക',
    or: 'କମ ଦେଖାନ୍ତୁ',
    pa: 'ਘੱਟ ਦਿਖਾਓ',
    as: 'কম দেখুৱাওক',
    ur: 'کم دکھائیں'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void; // Still typed but will be a no-op
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Language is fixed to 'en'
  const language: Language = 'en'; 
  
  // setLanguage will be a no-op function, so it doesn't need to use useState's setter
  const setLanguage = (_lang: Language) => {
    // This function now does nothing, effectively fixing the language.
    // console.warn("Language selection is disabled. Defaulting to English.");
  };

  const t = (key: string): string => {
    // Always attempt to return the English translation.
    return translations[key]?.['en'] || translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
