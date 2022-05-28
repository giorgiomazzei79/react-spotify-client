import { SHA3 } from "sha3";

function login() {
    const clientId = encodeURIComponent(process.env.REACT_APP_CLIENT_ID || "");
    const responseType = "token";
    const redirectUri = encodeURIComponent("http://localhost:3000");
    const hash = new SHA3(512);
    const r = Math.random().toString(36).substring(7);
    hash.update(r);
    const state = encodeURIComponent(hash.digest("hex"));
    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&state=${state}`;
    window.location.href = authorizeUrl;
  }

  export default login;