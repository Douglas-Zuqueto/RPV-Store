import { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    (function(d, w, c) {
      w.ChatraID = 'B2iY2v8mTyQEeqQzd';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
  }, []);

  console.log('Chat funcionando...');
  return null;
}

export default Chat;
