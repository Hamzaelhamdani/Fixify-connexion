export function handleSignup(navigate: (path: string) => void) {
    //  Ici tu peux ajouter ta logique de vérification ou d'envoi
    console.log("Inscription réussie"); 
  
    // Rediriger vers /login
    navigate("/login");
  }