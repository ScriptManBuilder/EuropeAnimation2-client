import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';
import { CONTACT_INFO, COMPANY_INFO, MEMBERSHIP_CONFIG } from '../config/constants';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--minimal-gray-900);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
`;

const SubscriptionPolicy: React.FC = () => {
  const { formatPrice } = usePrice();
  const membershipPrice = formatPrice(MEMBERSHIP_CONFIG.vip.monthlyPrice);

  return (
    <Container>
      <Title>VIP Membership Subscription & Cancellation Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <HighlightBox>
        <h3 style={{ marginTop: 0 }}>Quick Summary</h3>
        <p style={{ marginBottom: 0 }}>
          • <strong>Price:</strong> {membershipPrice}/month after 3-day free trial<br/>
          • <strong>Billing:</strong> Monthly automatic renewal<br/>
          • <strong>Cancellation:</strong> Anytime, takes effect at end of billing cycle<br/>
          • <strong>Access:</strong> Continues until end of paid period after cancellation
        </p>
      </HighlightBox>

      <Section>
        <SectionTitle>1. VIP Membership Overview</SectionTitle>
        <Paragraph>
          The {COMPANY_INFO.name} VIP Membership is a subscription-based program that provides 
          exclusive benefits to our members, including 25% discount on all animation courses, 
          priority customer support, exclusive content, and early access to new courses.
        </Paragraph>
        <Paragraph>
          <strong>Membership Price:</strong> {membershipPrice} per month<br/>
          <strong>Free Trial:</strong> {MEMBERSHIP_CONFIG.vip.trialDays} days<br/>
          <strong>Billing Cycle:</strong> Monthly, automatically renewing
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Subscription Terms and Billing</SectionTitle>
        <Paragraph>
          <strong>Automatic Renewal:</strong> Your VIP Membership will automatically renew on a monthly basis 
          unless you cancel it before the next billing cycle begins.
        </Paragraph>
        <Paragraph>
          <strong>Monthly Billing:</strong> You will be charged {membershipPrice} per month. The charge will 
          appear on your credit card statement as "euro-tin.com".
        </Paragraph>
        <Paragraph>
          <strong>Free Trial Period:</strong> New members receive a {MEMBERSHIP_CONFIG.vip.trialDays}-day free trial. 
          You will not be charged during the trial period. If you cancel during the trial, you will not be charged at all.
        </Paragraph>
        <Paragraph>
          <strong>Payment Date:</strong> Your membership will renew on the same date each month as your original 
          subscription date (or trial end date). For example, if you subscribe on the 15th of the month, 
          you will be billed on the 15th of each subsequent month.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. How to Cancel Your Membership</SectionTitle>
        <Paragraph>
          You can cancel your VIP Membership at any time. There are two ways to cancel:
        </Paragraph>
        <Paragraph>
          <strong>Method 1: Through Your Account</strong><br/>
          1. Log in to your account at {COMPANY_INFO.websiteUrl}<br/>
          2. Go to "Account" → "My Account"<br/>
          3. Navigate to the "Membership" or "Subscription Management" section<br/>
          4. Click "Cancel Membership" or "Manage Subscription"<br/>
          5. Follow the cancellation prompts<br/>
          6. You will receive a confirmation email
        </Paragraph>
        <Paragraph>
          <strong>Method 2: Contact Customer Support</strong><br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Support Hours: Monday-Friday, 9 AM - 6 PM GMT<br/>
          <br/>
          Include your account email address and request membership cancellation. 
          Our support team will process your cancellation within 24 hours.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Cancellation Effective Date</SectionTitle>
        <Paragraph>
          <strong>Important:</strong> When you cancel your VIP Membership, the cancellation takes effect 
          at the end of your current billing cycle, not immediately.
        </Paragraph>
        <Paragraph>
          <strong>What this means:</strong>
        </Paragraph>
        <Paragraph>
          • If you cancel on January 10th and your billing cycle ends on January 25th, 
          you will continue to have VIP access until January 25th<br/>
          • You will NOT be charged for the next billing cycle<br/>
          • Your VIP benefits (25% discount, exclusive content, etc.) remain active 
          until the end of your paid period<br/>
          • After the billing cycle ends, your account will revert to a free account
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Refund Policy for Membership</SectionTitle>
        <Paragraph>
          <strong>No Partial Month Refunds:</strong> We do not provide refunds for partial months. 
          If you cancel your membership, you will not receive a refund for the current billing period.
        </Paragraph>
        <Paragraph>
          <strong>Free Trial Cancellation:</strong> If you cancel during your {MEMBERSHIP_CONFIG.vip.trialDays}-day 
          free trial period, you will not be charged at all. You can continue to use VIP benefits 
          until the trial period ends.
        </Paragraph>
        <Paragraph>
          <strong>First Month Refund:</strong> If you experience technical issues preventing you from 
          using VIP benefits during your first paid month, please contact support at {CONTACT_INFO.email}. 
          We will review refund requests on a case-by-case basis.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. What Happens After Cancellation</SectionTitle>
        <Paragraph>
          When your VIP Membership is cancelled and the current billing cycle ends:
        </Paragraph>
        <Paragraph>
          ✓ You keep all courses you purchased with your VIP discount<br/>
          ✓ Your account remains active with all purchased courses<br/>
          ✗ You lose the 25% VIP discount on future course purchases<br/>
          ✗ You lose access to exclusive VIP-only content<br/>
          ✗ Priority customer support is no longer available<br/>
          ✗ Early access to new courses is removed
        </Paragraph>
        <Paragraph>
          <strong>Re-subscribing:</strong> You can re-subscribe to VIP Membership at any time by 
          visiting your Account page and clicking "Upgrade to VIP". You may be eligible for another 
          free trial if it has been more than 6 months since your last subscription.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Billing Disputes and Issues</SectionTitle>
        <Paragraph>
          If you notice any unexpected charges or billing issues:
        </Paragraph>
        <Paragraph>
          1. Check your email for billing notifications from {CONTACT_INFO.email}<br/>
          2. Review your subscription status in your Account page<br/>
          3. Contact our support team immediately at {CONTACT_INFO.email}<br/>
          4. Include your account email, transaction details, and issue description<br/>
          5. We will investigate and respond within 24-48 hours
        </Paragraph>
        <Paragraph>
          <strong>Billing Descriptor:</strong> Charges appear on your statement as "euro-tin.com".
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Pausing Your Membership</SectionTitle>
        <Paragraph>
          Currently, we do not offer the ability to pause or freeze your VIP Membership. 
          If you need to take a break, we recommend cancelling your membership and re-subscribing 
          when you're ready to return. Your course progress and purchased courses will remain in your account.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Membership Changes and Price Updates</SectionTitle>
        <Paragraph>
          {COMPANY_INFO.name} reserves the right to change membership pricing with 30 days advance notice. 
          Existing members will be notified via email before any price changes take effect. 
          You will have the option to cancel before the new pricing applies.
        </Paragraph>
        <Paragraph>
          If you cancel due to a price increase within 14 days of the notification, 
          you may be eligible for a prorated refund for your current billing cycle.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Membership Violation and Termination</SectionTitle>
        <Paragraph>
          {COMPANY_INFO.name} reserves the right to terminate VIP Memberships that violate our Terms & Conditions, 
          including but not limited to:
        </Paragraph>
        <Paragraph>
          • Sharing account credentials with others<br/>
          • Using VIP benefits for commercial resale<br/>
          • Abusing refund or cancellation policies<br/>
          • Fraudulent payment methods<br/>
          • Violation of course licensing terms
        </Paragraph>
        <Paragraph>
          Memberships terminated for violations are not eligible for refunds.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Contact Information</SectionTitle>
        <Paragraph>
          For questions about VIP Membership, billing, or cancellations:
        </Paragraph>
        <Paragraph>
          Company: {COMPANY_INFO.name}<br/>
          Director: {COMPANY_INFO.director} ({COMPANY_INFO.directorRole})<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}<br/>
          Support Hours: Monday-Friday, 9 AM - 6 PM GMT
        </Paragraph>
        <Paragraph>
          <strong>For urgent billing issues:</strong> Include "URGENT - BILLING" in your email subject line 
          for priority handling.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>12. Your Rights</SectionTitle>
        <Paragraph>
          As a VIP Member, you have the right to:
        </Paragraph>
        <Paragraph>
          • Clear information about subscription terms and pricing<br/>
          • Easy cancellation process without penalties<br/>
          • Access to all purchased content after cancellation<br/>
          • Transparent billing with detailed statements<br/>
          • Prompt customer support for subscription issues<br/>
          • Fair treatment and dispute resolution
        </Paragraph>
        <Paragraph>
          This policy is governed by the laws of England and Wales, United Kingdom, 
          in accordance with our Terms & Conditions.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default SubscriptionPolicy;
