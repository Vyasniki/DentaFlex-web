import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for consistency with typeface guidelines
const Section = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.6,
}));

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ marginBottom: 20 }}>
      <Section>
        <Title>Privacy Policy</Title>
        <Content>
          At <b>Denta Flex</b>, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data in accordance with applicable
          privacy laws, including those specific to dental clinics, credit card
          information, and payroll safety within Ontario.
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Data Collection</Subtitle>
        <Content>
          We collect the following types of data:
          <ul>
            <li>
              <strong>Personal Information</strong>: Name, contact details,
              medical history (for dental clinics), and other information
              provided during interactions.
            </li>
            <li>
              <strong>Financial Information</strong>: Credit card details and
              billing information.
            </li>
            <li>
              <strong>Payroll Information</strong>: Data related to employee
              compensation and benefits.
            </li>
          </ul>
          We collect this data to provide our services, process transactions,
          and comply with legal requirements.
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Use of Data</Subtitle>
        <Content>
          Your data is used for the following purposes:
          <ul>
            <li>
              <strong>To Provide Services</strong>: Deliver dental services and
              manage patient records.
            </li>
            <li>
              <strong>To Process Payments</strong>: Handle credit card
              transactions and billing.
            </li>
            <li>
              <strong>To Administer Payroll</strong>: Manage employee
              compensation and benefits.
            </li>
            <li>
              <strong>To Improve Services</strong>: Analyze data to enhance our
              offerings and customer experience.
            </li>
          </ul>
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Data Sharing and Disclosure</Subtitle>
        <Content>
          We do not share your data with third parties except in the following
          circumstances:
          <ul>
            <li>
              <strong>With Your Consent</strong>: When you have given explicit
              consent for us to share your data.
            </li>
            <li>
              <strong>For Service Providers</strong>: With trusted third-party
              service providers who assist in processing payments or managing
              payroll, subject to confidentiality agreements.
            </li>
            <li>
              <strong>For Legal Compliance</strong>: When required by law, such
              as complying with a subpoena or legal process.
            </li>
            <li>
              <strong>For Business Transfers</strong>: In the event of a merger,
              acquisition, or sale of assets.
            </li>
          </ul>
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Data Security</Subtitle>
        <Content>
          We implement appropriate security measures to protect your data from
          unauthorized access, alteration, disclosure, or destruction. This
          includes:
          <ul>
            <li>
              <strong>Encryption</strong>: Data encryption during transmission
              and storage.
            </li>
            <li>
              <strong>Access Controls</strong>: Restricted access to personal
              and financial information.
            </li>
            <li>
              <strong>Regular Audits</strong>: Regular security audits and
              updates to our systems.
            </li>
          </ul>
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>User Rights</Subtitle>
        <Content>
          You have the following rights regarding your personal data:
          <ul>
            <li>
              <strong>Access</strong>: Request access to your personal data.
            </li>
            <li>
              <strong>Correction</strong>: Request corrections to any
              inaccuracies in your data.
            </li>
            <li>
              <strong>Deletion</strong>: Request the deletion of your personal
              data.
            </li>
            <li>
              <strong>Objection</strong>: Object to the processing of your data
              in certain circumstances.
            </li>
          </ul>
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Compliance with Local Laws</Subtitle>
        <Content>
          Our privacy practices comply with applicable laws and regulations in
          Ontario, including those related to:
          <ul>
            <li>
              <strong>
                Personal Information Protection and Electronic Documents Act
                (PIPEDA)
              </strong>
            </li>
            <li>
              <strong>
                Ontario’s Personal Health Information Protection Act (PHIPA)
              </strong>
            </li>
            <li>
              <strong>Employment Standards Act</strong>: Regarding payroll and
              employee data protection.
            </li>
          </ul>
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Changes to the Privacy Policy</Subtitle>
        <Content>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we encourage you to review it
          periodically.
        </Content>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Contact Information</Subtitle>
        <Content>
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
          <ul>
            <li>
              <strong>Email</strong>: [support@dentaflex.ca]
            </li>
            <li>
              <strong>Phone</strong>: [226-272-1990]
            </li>
          </ul>
        </Content>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
