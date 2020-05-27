/** created by Sophie Bergeron **/

/**
 Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le
 mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas
 correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».


 */

//Etape 1 trouver les variables
var user;
var pw;

//Etape 2 Lecture(demander à l'usager des données)

user=(prompt("Entrer votre nom d'utilisateur : "));
pw=(prompt("Entrer votre mot de passe a 5 chiffres:"));

//Etape 3 Les calcules


//Valider le nom d'usager et le mot de passe

if (user === "admin" && pw === "12345") {
    document.write("Bonjour " + user);
}
else{
    document.write("Votre nom d’utilisateur ou votre mot de passe est invalide");
}
