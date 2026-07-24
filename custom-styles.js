var customCssStyles = `

[data-cognigy-webchat-root] {

  /* Bosch Rexroth Blue */
  --webchat-primary-color: #00B5E2;
  --webchat-primary-color-hover: #0099c2;
  --webchat-primary-contrast-color: #ffffff;

  /* Chat Background */
  --webchat-background-webchat: #ffffff;

  /* Bot Message */
  --webchat-background-bot-message: #ffffff;
  --webchat-bot-message-contrast-color: #1A1A1A;

  /* User Message */
  --webchat-background-user-message: #f4f4f6;
  --webchat-user-message-contrast-color: #1A1A1A;

  /* Links */
  --webchat-text-link: #005691;

  /* Rounded bubbles */
  --webchat-bubble-border-radius: 16px;

  /* Font */
  --webchat-font-family: "Bosch Sans", Arial, sans-serif;
}

/* Header */
[data-cognigy-webchat-root] .webchat-header {
    background: linear-gradient(90deg,#00B5E2,#00C8F7) !important;
    color: white !important;
}

/* Quick Reply Buttons */
[data-cognigy-webchat-root] button {
    border-radius: 25px !important;
}

/* Dark Blue Pills */
[data-cognigy-webchat-root] .reply-button,
[data-cognigy-webchat-root] .webchat-quick-reply-template-reply-button {
    background: #002B65 !important;
    color: white !important;
    border: none !important;
    border-radius: 25px !important;
}

/* Hover */
[data-cognigy-webchat-root] .reply-button:hover,
[data-cognigy-webchat-root] .webchat-quick-reply-template-reply-button:hover {
    background: #004494 !important;
}

`;
var styleSheet = document.createElement('style');
styleSheet.appendChild(document.createTextNode(customCssStyles));
document.head.appendChild(styleSheet);