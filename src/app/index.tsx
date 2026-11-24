import * as Speech from 'expo-speech';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { LanguageToggle } from '@/components/welcome/language-toggle';
import { VisualIllustration } from '@/components/welcome/visual-illustration';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import {
  detectDeviceLanguage,
  Language,
  translations,
} from '@/constants/translations';
import { useTheme } from '@/hooks/use-theme';

export default function WelcomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { width } = useWindowDimensions();

  // Desktop threshold: 840px or wider
  const isDesktop = width >= 840;

  // Language state: auto-detects device locale on initial load
  const [language, setLanguage] = useState<Language>(() => detectDeviceLanguage());
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = translations[language];

  // Stop speech synthesis on component unmount
  useEffect(() => {
    return () => {
      Speech.stop().catch(() => {});
    };
  }, []);

  // Stop speech if language changes during playback
  useEffect(() => {
    if (isSpeaking) {
      Speech.stop().catch(() => {});
      setIsSpeaking(false);
    }
  }, [language]);

  const handleToggleSpeech = async () => {
    if (isSpeaking) {
      try {
        await Speech.stop();
      } catch (err) {
        console.warn('Speech stop error:', err);
      }
      setIsSpeaking(false);
      return;
    }

    try {
      const isAlreadySpeaking = await Speech.isSpeakingAsync();
      if (isAlreadySpeaking) {
        await Speech.stop();
      }

      setIsSpeaking(true);
      const voiceLanguage = language === 'te' ? 'te-IN' : 'en-US';

      Speech.speak(t.audioIntroText, {
        language: voiceLanguage,
        rate: 0.95,
        pitch: 1.0,
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: (err) => {
          console.warn('Speech synthesis error:', err);
          setIsSpeaking(false);
        },
      });
    } catch (err) {
      console.warn('Failed to start speech:', err);
      setIsSpeaking(false);
    }
  };

  return (
    <ThemedView style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Top Bar: Brand Badge & Language Switcher */}
          <View style={styles.topBar}>
            <View style={styles.brandRow}>
              <View style={styles.appIconBadge}>
                <ThemedText style={styles.appIconText}>✓</ThemedText>
              </View>
              <ThemedText type="smallBold" style={styles.brandName}>
                {t.appName}
              </ThemedText>
            </View>

            <LanguageToggle
              currentLanguage={language}
              onSelectLanguage={(lang) => setLanguage(lang)}
            />
          </View>

          {/* Main Content Area */}
          <View style={[styles.mainLayout, isDesktop && styles.desktopSplitLayout]}>
            {/* Visual Illustration Panel (Displayed on desktop or tablet) */}
            {isDesktop && (
              <View style={styles.illustrationColumn}>
                <VisualIllustration t={t} />
              </View>
            )}

            {/* Content & Actions Column */}
            <View style={[styles.contentColumn, !isDesktop && styles.mobileCenteredContent]}>
              {/* Product Badge */}
              <View style={styles.badgeContainer}>
                <ThemedView type="backgroundElement" style={styles.badge}>
                  <ThemedText type="small" style={styles.badgeText}>
                    {t.badge}
                  </ThemedText>
                </ThemedView>
              </View>

              {/* Welcome Heading */}
              <ThemedText
                type="title"
                style={[
                  styles.headingText,
                  !isDesktop && styles.mobileHeading,
                ]}>
                {t.heading}
              </ThemedText>

              {/* Description */}
              <ThemedText
                type="default"
                themeColor="textSecondary"
                style={[
                  styles.descriptionText,
                  !isDesktop && styles.mobileDescription,
                ]}>
                {t.description}
              </ThemedText>

              {/* Key Highlights */}
              <View style={styles.highlightsContainer}>
                <View style={styles.highlightItem}>
                  <ThemedText style={styles.highlightIcon}>🎙️</ThemedText>
                  <View style={styles.highlightTextContainer}>
                    <ThemedText type="smallBold">{t.features.voiceTitle}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {t.features.voiceDesc}
                    </ThemedText>
                  </View>
                </View>

                <View style={styles.highlightItem}>
                  <ThemedText style={styles.highlightIcon}>⚡</ThemedText>
                  <View style={styles.highlightTextContainer}>
                    <ThemedText type="smallBold">{t.features.smartTitle}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {t.features.smartDesc}
                    </ThemedText>
                  </View>
                </View>

                <View style={styles.highlightItem}>
                  <ThemedText style={styles.highlightIcon}>🔄</ThemedText>
                  <View style={styles.highlightTextContainer}>
                    <ThemedText type="smallBold">{t.features.offlineTitle}</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {t.features.offlineDesc}
                    </ThemedText>
                  </View>
                </View>
              </View>

              {/* Audio Introduction Control */}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={isSpeaking ? t.stopIntro : t.listenIntro}
                onPress={handleToggleSpeech}
                style={({ pressed }) => [
                  styles.audioButton,
                  isSpeaking && styles.audioButtonActive,
                  pressed && styles.pressedState,
                ]}>
                <ThemedText style={styles.audioIcon}>
                  {isSpeaking ? '⏹' : '🔊'}
                </ThemedText>
                <ThemedText
                  type="smallBold"
                  style={[
                    styles.audioButtonText,
                    isSpeaking && styles.audioButtonTextActive,
                  ]}>
                  {isSpeaking ? t.stopIntro : t.listenIntro}
                </ThemedText>
              </Pressable>

              {/* Main Action Buttons */}
              <View style={styles.actionButtonGroup}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={t.getStarted}
                  onPress={() => router.push('/onboarding' as any)}
                  style={({ pressed }) => [
                    styles.primaryButton,
                    pressed && styles.pressedState,
                  ]}>
                  <ThemedText style={styles.primaryButtonText}>
                    {t.getStarted} →
                  </ThemedText>
                </Pressable>

                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={t.login}
                  onPress={() => router.push('/login' as any)}
                  style={({ pressed }) => [
                    styles.secondaryButton,
                    { borderColor: 'rgba(128, 128, 128, 0.25)' },
                    pressed && styles.pressedState,
                  ]}>
                  <ThemedText type="smallBold" style={styles.secondaryButtonText}>
                    {t.login}
                  </ThemedText>
                </Pressable>
              </View>

              {/* Legal Links Footer */}
              <View style={styles.legalFooter}>
                <Pressable
                  accessibilityRole="link"
                  accessibilityLabel={t.privacyPolicy}
                  onPress={() => router.push('/privacy' as any)}
                  style={styles.legalLink}>
                  <ThemedText type="small" themeColor="textSecondary" style={styles.legalLinkText}>
                    {t.privacyPolicy}
                  </ThemedText>
                </Pressable>

                <ThemedText type="small" themeColor="textSecondary">
                  •
                </ThemedText>

                <Pressable
                  accessibilityRole="link"
                  accessibilityLabel={t.termsOfService}
                  onPress={() => router.push('/terms' as any)}
                  style={styles.legalLink}>
                  <ThemedText type="small" themeColor="textSecondary" style={styles.legalLinkText}>
                    {t.termsOfService}
                  </ThemedText>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    maxWidth: MaxContentWidth + 240,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.four,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  appIconBadge: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#208AEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brandName: {
    fontSize: 16,
    letterSpacing: 0.2,
  },
  mainLayout: {
    width: '100%',
    maxWidth: MaxContentWidth + 240,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.six,
  },
  desktopSplitLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.four,
  },
  illustrationColumn: {
    flex: 1,
    maxWidth: 500,
    paddingRight: Spacing.four,
  },
  contentColumn: {
    flex: 1,
    maxWidth: 540,
    gap: Spacing.three,
  },
  mobileCenteredContent: {
    alignItems: 'center',
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#208AEF',
    letterSpacing: 0.4,
  },
  headingText: {
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  mobileHeading: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 25,
  },
  mobileDescription: {
    textAlign: 'center',
  },
  highlightsContainer: {
    gap: Spacing.two,
    marginVertical: Spacing.one,
    width: '100%',
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  highlightIcon: {
    fontSize: 16,
    marginTop: 2,
  },
  highlightTextContainer: {
    flex: 1,
    gap: 1,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: Spacing.two,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(32, 138, 239, 0.4)',
    backgroundColor: 'rgba(32, 138, 239, 0.08)',
  },
  audioButtonActive: {
    backgroundColor: '#FFEBEA',
    borderColor: '#D9383A',
  },
  audioIcon: {
    fontSize: 14,
  },
  audioButtonText: {
    fontSize: 13,
    color: '#0274DF',
  },
  audioButtonTextActive: {
    color: '#D9383A',
  },
  actionButtonGroup: {
    width: '100%',
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  primaryButton: {
    width: '100%',
    minHeight: 52,
    backgroundColor: '#208AEF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#208AEF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  secondaryButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 15,
  },
  pressedState: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  legalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    marginTop: Spacing.three,
    paddingTop: Spacing.two,
  },
  legalLink: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  legalLinkText: {
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
