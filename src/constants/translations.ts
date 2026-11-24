export type Language = 'en' | 'te';

export interface WelcomeTranslations {
  appName: string;
  badge: string;
  heading: string;
  description: string;
  listenIntro: string;
  stopIntro: string;
  speakingStatus: string;
  getStarted: string;
  login: string;
  alreadyAccount: string;
  privacyPolicy: string;
  termsOfService: string;
  features: {
    voiceTitle: string;
    voiceDesc: string;
    smartTitle: string;
    smartDesc: string;
    offlineTitle: string;
    offlineDesc: string;
  };
  sampleTasks: {
    task1Title: string;
    task1Tag: string;
    task2Title: string;
    task2Tag: string;
    task3Title: string;
    task3Tag: string;
  };
  audioIntroText: string;
}

export const translations: Record<Language, WelcomeTranslations> = {
  en: {
    appName: 'Adaptive Task Manager',
    badge: 'Universal • Intelligent • Offline',
    heading: 'Organize your life, effortlessly.',
    description:
      'An intelligent task manager built for working professionals and everyday life. Create tasks with voice or typing, plan your day intelligently, and stay organized seamlessly across Web, Android, and iOS.',
    listenIntro: 'Listen to Introduction',
    stopIntro: 'Stop Audio',
    speakingStatus: 'Speaking introduction...',
    getStarted: 'Get Started',
    login: 'Log In',
    alreadyAccount: 'Already have an account?',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    features: {
      voiceTitle: 'Voice & Manual Input',
      voiceDesc: 'Speak or type tasks in English & Telugu without switching tools.',
      smartTitle: 'Intelligent Scheduling',
      smartDesc: 'Adaptive task prioritization designed for busy schedules.',
      offlineTitle: 'Offline Synchronization',
      offlineDesc: 'Work anywhere without internet; syncs automatically when reconnected.',
    },
    sampleTasks: {
      task1Title: 'Complete Q4 Strategy Review',
      task1Tag: 'High Priority',
      task2Title: 'Voice Note: Schedule Telugu team sync',
      task2Tag: 'Voice Memo',
      task3Title: 'Prepare sprint presentation slides',
      task3Tag: 'Work',
    },
    audioIntroText:
      'Welcome to Adaptive Universal Task Manager. An intelligent, universal task manager designed for working professionals and everyday life. You can create tasks using voice or keyboard, plan intelligently, and work seamlessly offline across Web, Android, and iOS. Tap Get Started to begin, or Log In if you already have an account.',
  },
  te: {
    appName: 'అడాప్టివ్ టాస్క్ మేనేజర్',
    badge: 'యూనివర్సల్ • స్మార్ట్ • ఆఫ్‌లైన్',
    heading: 'మీ పనులను సులభంగా క్రమబద్ధీకరించుకోండి.',
    description:
      'ఉద్యోగులు మరియు రోజువారీ ఉత్పాదకత కోసం రూపొందించబడిన ఆధునిక టాస్క్ మేనేజర్. వాయిస్ లేదా టైపింగ్ ద్వారా పనులను చేర్చండి, తెలివిగా ప్రణాళిక వేసుకోండి మరియు వెబ్, ఆండ్రాయిడ్, ఐఓఎస్‌లలో ఎల్లప్పుడూ సమర్థవంతంగా పనిచేయండి.',
    listenIntro: 'పరిచయాన్ని వినండి',
    stopIntro: 'ఆడియో ఆపివేయండి',
    speakingStatus: 'పరిచయం వినబడుతోంది...',
    getStarted: 'ప్రారంభించండి',
    login: 'లాగిన్ అవ్వండి',
    alreadyAccount: 'ఇప్పటికే ఖాతా ఉందా?',
    privacyPolicy: 'గోప్యతా విధానం',
    termsOfService: 'నిబంధనలు మరియు షరతులు',
    features: {
      voiceTitle: 'వాయిస్ & టైపింగ్ నమోదు',
      voiceDesc: 'ఇంగ్లీష్ మరియు తెలుగులో సులభంగా మాట్లాడి లేదా టైప్ చేసి టాస్క్‌లను చేర్చండి.',
      smartTitle: 'తెలివైన షెడ్యూలింగ్',
      smartDesc: 'మీ పని ఒత్తిడికి అనుగుణంగా టాస్క్‌ల ఆటోమేటిక్ ప్రాధాన్యత.',
      offlineTitle: 'ఆఫ్‌లైన్ సమకాలీకరణ',
      offlineDesc: 'ఇంటర్నెట్ లేకపోయినా నిరంతరాయంగా పనిచేయండి; తిరిగి కనెక్ట్ అయినప్పుడు సింక్ అవుతుంది.',
    },
    sampleTasks: {
      task1Title: 'వ్యూహాత్మక సమీక్ష పూర్తి చేయండి',
      task1Tag: 'అత్యవసరం',
      task2Title: 'వాయిస్ నోట్: తెలుగు బృందం సమావేశం',
      task2Tag: 'వాయిస్ రికార్డ్',
      task3Title: 'ప్రాజెక్ట్ ప్రెజెంటేషన్ సిద్ధం చేయండి',
      task3Tag: 'పని',
    },
    audioIntroText:
      'అడాప్టివ్ యూనివర్సల్ టాస్క్ మేనేజర్‌కి స్వాగతం. ఉద్యోగులు మరియు రోజువారీ జీవితం కోసం రూపొందించబడిన స్మార్ట్ టాస్క్ మేనేజర్. మీరు వాయిస్ లేదా కీబోర్డ్ ద్వారా పనులను సృష్టించవచ్చు, స్మార్ట్ షెడ్యూలింగ్‌తో నిర్వహించవచ్చు మరియు వెబ్, ఆండ్రాయిడ్, ఐఓఎస్‌లలో ఆఫ్‌లైన్‌లో కూడా నిరంతరాయంగా పనిచేయవచ్చు. ప్రారంభించడానికి గెట్ స్టార్టెడ్ పై నొక్కండి, లేదా ఖాతా ఉంటే లాగిన్ అవ్వండి.',
  },
};

/**
 * Automatically detects device locale.
 * Returns 'te' if the system or browser locale starts with 'te', otherwise defaults to 'en'.
 */
export function detectDeviceLanguage(): Language {
  try {
    let locale = '';
    if (typeof navigator !== 'undefined' && navigator.language) {
      locale = navigator.language;
    } else if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
      locale = Intl.DateTimeFormat().resolvedOptions().locale;
    }
    if (locale && locale.toLowerCase().startsWith('te')) {
      return 'te';
    }
  } catch {
    // Graceful fallback to English
  }
  return 'en';
}
