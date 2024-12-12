const EmailContactLink = ({ styles }: any) => {
  const emailAddress = "hello@weekendlabs.in";
  const emailSubject = "Inquiry About Weekend Labs Services";
  const emailBody = `Hello Weekend Labs Team,

I'm reaching out to learn more about the services you offer. Could you provide me with some additional information about how you can help my project or business?

I'm interested in understanding:
- Your service offerings
- Expertise and capabilities
- Potential collaboration opportunities

Looking forward to hearing back from you.

Best regards,
[Your Name]`;

  // Encode subject and body for use in mailto link
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);

  const mailtoLink = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <a href={mailtoLink} className={styles}>
      hello@weekendlabs.in
    </a>
  );
};

export default EmailContactLink;
