import Keycloak from "keycloak-js"

let keycloak = null;

function resetToken(){
  keycloak = null 
}

async function initKeycloak(init){
  if (!keycloak) {
    keycloak = new Keycloak({
      url: "https://bscit.sit.kmutt.ac.th/intproj25/ft/keycloak/",
      realm: "itb-ecors",
      clientId: "itb-ecors-ssi3",
    });
  }

  await keycloak
    .init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      checkLoginIframe: false,
      silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
    })
    .then(() => { init(keycloak) })
    .catch((err) => console.error("Keycloak init error:", err))
  return keycloak
}

function logInSystem(){
  keycloak.login({
    redirectUri: window.location.origin + "/reserve.html",
    prompt: "login",
  })
}

function logOutSystem(){
  if (!keycloak) return

  keycloak
    .logout({
      redirectUri: window.location.origin + "/index.html",
    })
    .catch((err) => console.error("Logout error:", err))
    .finally(() => {
      keycloak.clearToken()
      sessionStorage.clear()
      localStorage.clear()
    })
}

export { resetToken, initKeycloak, logInSystem, logOutSystem }