import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});




export default withPWA({
    images: {
        domains: ['cdn.myanimelist.net', 'imgsrv.crunchyroll.com', 'localhost']
      }
  });