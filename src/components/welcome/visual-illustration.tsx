import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { WelcomeTranslations } from '@/constants/translations';
import { useTheme } from '@/hooks/use-theme';

interface VisualIllustrationProps {
  t: WelcomeTranslations;
}

export function VisualIllustration({ t }: VisualIllustrationProps) {
  const theme = useTheme();

  // Detect Telugu selection to provide seamless bilingual preview support
  const isTelugu = t.appName.includes('అడాప్టివ్');
  const taskTitle = isTelugu ? 'వ్యూహాత్మక సమీక్ష పూర్తి చేయండి' : 'Complete Q4 Strategy Review';
  const priorityLabel = isTelugu ? 'అత్యవసరం' : 'High';
  const scheduleLabel = isTelugu ? 'ఉదయం 9:00 • ఈరోజు' : '9:00 AM • Today';
  const voiceLabel = isTelugu ? 'వాయిస్ నమోదు' : 'Voice Input';
  const smartLabel = isTelugu ? 'స్మార్ట్ షెడ్యూల్' : 'Smart Scheduled';
  const cardBadge = isTelugu ? 'టాస్క్ ప్రివ్యూ' : 'Active Task';
  const syncLabel = isTelugu ? 'సింక్ అయ్యింది • ఆఫ్‌లైన్ సిద్ధం' : 'Universal Sync • Offline Ready';

  return (
    <View style={styles.container}>
      {/* Decorative Outer Frame */}
      <ThemedView type="backgroundElement" style={styles.cardWrapper}>
        {/* Window / App Header */}
        <View style={styles.windowHeader}>
          <View style={styles.trafficDots}>
            <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
            <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
            <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
          </View>
          <ThemedText type="small" themeColor="textSecondary" style={styles.windowTitle}>
            {t.appName}
          </ThemedText>
        </View>

        {/* Single Elegant Modern Task Preview Card */}
        <View style={[styles.taskCard, { backgroundColor: theme.background }]}>
          {/* Header Row: Checkbox, Badge & Priority */}
          <View style={styles.cardHeaderRow}>
            <View style={styles.checkRow}>
              <View style={styles.checkCircle}>
                <ThemedText style={styles.checkMark}>✓</ThemedText>
              </View>
              <ThemedText type="smallBold" themeColor="textSecondary" style={styles.cardBadgeText}>
                {cardBadge}
              </ThemedText>
            </View>

            {/* Priority: High */}
            <View style={styles.priorityBadge}>
              <View style={styles.priorityDot} />
              <ThemedText style={styles.priorityText}>
                {priorityLabel}
              </ThemedText>
            </View>
          </View>

          {/* Task Title */}
          <View style={styles.titleSection}>
            <ThemedText type="subtitle" style={styles.taskTitle}>
              {taskTitle}
            </ThemedText>
          </View>

          {/* Schedule Row */}
          <View style={styles.scheduleRow}>
            <ThemedText style={styles.scheduleIcon}>🕒</ThemedText>
            <ThemedText type="default" themeColor="textSecondary" style={styles.scheduleText}>
              {scheduleLabel}
            </ThemedText>
          </View>

          {/* Indicators Row: Small Voice Input & Smart Scheduling */}
          <View style={styles.indicatorsRow}>
            {/* Small Voice Input Indicator */}
            <View style={[styles.indicatorPill, styles.voicePill]}>
              <ThemedText style={styles.indicatorIcon}>🎙️</ThemedText>
              <ThemedText style={styles.voicePillText}>
                {voiceLabel}
              </ThemedText>
            </View>

            {/* Small Smart Scheduling Indicator */}
            <View style={[styles.indicatorPill, styles.smartPill]}>
              <ThemedText style={styles.indicatorIcon}>⚡</ThemedText>
              <ThemedText style={styles.smartPillText}>
                {smartLabel}
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Bottom Status Indicator */}
        <View style={styles.bottomBar}>
          <View style={styles.statusDot} />
          <ThemedText type="small" themeColor="textSecondary" style={styles.statusText}>
            {syncLabel}
          </ThemedText>
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 480,
    borderRadius: 24,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 4,
  },
  windowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: Spacing.three,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.1)',
    marginBottom: Spacing.four,
  },
  trafficDots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  windowTitle: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  taskCard: {
    borderRadius: 18,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.12)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    gap: Spacing.three,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#208AEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardBadgeText: {
    fontSize: 13,
    letterSpacing: 0.2,
  },
  priorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FFEBEA',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D9383A',
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D9383A',
  },
  titleSection: {
    paddingVertical: Spacing.half,
  },
  taskTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  scheduleIcon: {
    fontSize: 14,
  },
  scheduleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  indicatorsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    flexWrap: 'wrap',
    paddingTop: Spacing.half,
  },
  indicatorPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  voicePill: {
    backgroundColor: '#E6F4FE',
  },
  voicePillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0274DF',
  },
  smartPill: {
    backgroundColor: '#EBF8EE',
  },
  smartPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1B8738',
  },
  indicatorIcon: {
    fontSize: 12,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.four,
    paddingTop: Spacing.three,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.1)',
    gap: Spacing.two,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#27C93F',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
