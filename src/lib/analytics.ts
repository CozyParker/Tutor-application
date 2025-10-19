export const analyticsScripts = (
  googleId?: string,
  metaPixelId?: string,
  hotjarId?: string,
  hotjarSv?: string
) => {
  const scripts: string[] = [];

  if (googleId) {
    scripts.push(`
      <script async src="https://www.googletagmanager.com/gtag/js?id=${googleId}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleId}');
      </script>
    `);
  }

  if (metaPixelId) {
    scripts.push(`
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${metaPixelId}');
        fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1"/></noscript>
    `);
  }

  if (hotjarId && hotjarSv) {
    scripts.push(`
      <script>
        (function(h,o,t,j,a,r){
            h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments)};
            h._hjSettings={hjid:${hotjarId},hjsv:${hotjarSv}};
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      </script>
    `);
  }

  return scripts.join('\n');
};
