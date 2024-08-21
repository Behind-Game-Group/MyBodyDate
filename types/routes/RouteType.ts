import {RegisterRoutes} from './RegisterRoutes';
import {LogInRoutes} from './LogInRoutes';
import {SignInRoutes} from './SignInRoutes';
import {SearchRoutes} from './SearchRoutes';
import {GameRoutes} from './GameRoutes';
import {AppsAffinitairesRoutes} from './AppsAffinitairesRoutes';
import {TalkRoutes} from './TalkRoutes';
import {EventRoutes} from './EventRoutes';
import {TabRoutes} from './TabRoutes';
import {ProfilRoutes} from './ProfilRoutes';
import {TabProfilRoutes} from './TabProfilRoutes';
import {PassRoutes} from './PassRoutes';
import {PulseRoutes} from './PulseRoutes';
import {SettingsRoutes} from './SettingsRoutes';
import {BaseRoutes} from './BaseRoutes';
import {HomeRoutes} from './HomeRoutes';
import {DiscoverRoutes} from './DiscoverRoutes';
import {NotificationsRoutes} from './NotificationsRoutes';
import {MessageRoutes} from './MessageRoutes';
import {MapRoutes} from './MapRoutes';

export type RouteType = {
  // Base
  navigateTo: {path: keyof RouteType};
  BaseNavigator: {BaseRoute: BaseRoutes};
  HomeNavigator: {HomeRoute: HomeRoutes};
  RegisterNavigator: {RegisterRoute: RegisterRoutes};
  LogInNavigator: {LoginRoute: LogInRoutes};
  SignInNavigator: {SignInRoute: SignInRoutes};
  TabNavigator: {TabRoute: TabRoutes};
  NotificationsNavigator: {NotificationsRoute: NotificationsRoutes};
  DiscoverNavigator: {DiscoverRoute: DiscoverRoutes};
  ProfilNavigator: {ProfilRoute: ProfilRoutes};
  TabProfilNavigator: {TabProfilRoute: TabProfilRoutes};
  MessageNavigator: {MessageRoute: MessageRoutes};
  MapNavigator: {MapRoute: MapRoutes};
  TalkNavigator: {TalkRoute: TalkRoutes};
  SearchNavigator: {SearchRoute: SearchRoutes};
  GameNavigator: {GameRoute: GameRoutes};
  EventNavigator: {EventRoute: EventRoutes};
  PassNavigator: {PassRoute: PassRoutes};
  PulseNavigator: {PulseRoute: PulseRoutes};
  SettingsNavigator: {SettingsRoute: SettingsRoutes};
  AppsAffinitairesNavigator: {
    AppsAffinitairesRoute: AppsAffinitairesRoutes;
    routeAffinite: string | undefined;
    menu: boolean | undefined;
  };

  // HomeNavigator
  Home: undefined;
  HomeNext: undefined;

  // DiscoverNavigator
  Discover: undefined;
  DiscoverCA: undefined;
  DiscoverRP: undefined;
  DiscoverBio: undefined;
  C_est_match: undefined;

  // TalkNavigator
  TalkChat: {
    user: string;
    prenium: string;
    friendChoice: string | undefined;
  };
  TalkPhone: undefined;
  TalkPhoneAccept: undefined;
  TalkVideo: undefined;
  TalkVideoAccept: undefined;

  // MessageNavigator
  Messages: undefined;

  // MapNavigator
  Map: undefined;

  // ProfilNavigator
  ProfilMeRPfirst: undefined;
  ProfilMeCAfirst: undefined;
  ProfilMeRAfirst: undefined;

  // TabProfilNavigator
  ProfilMeRP: undefined;
  ProfilMeCA: undefined;
  ProfilMeRA: undefined;
  Notifications: undefined;

  // EventNavigator
  Evenements: undefined;
  Evenements_Bio: undefined;

  // GameNavigator
  Voix_du_jour: undefined;
  Carte_magique: undefined;
  Voix_du_jour2: undefined;
  Carte_brise_glace: undefined;

  // PassNavigator
  Prend_pass: undefined;
  Pass_flash_21: undefined;
  Pass_flash_19: undefined;

  // PulseNavigator
  Pulse_recherche: undefined;
  Search_pulse: undefined;
  Search_pulse_settings: undefined;
  Pulse_spotlight: undefined;
  Pulse_like: undefined;
  Pulse_profil: undefined;

  // AppsAffinitairesNavigator
  Apps_Affinitaires: undefined;
  Apps_Affinitaires2: {routeAffinite: string; menu: boolean};

  // SearchNavigator
  Objectifs: undefined;
  Recherche: undefined;
  Filtres_avances: undefined;
  Sa_taille: undefined;
  Sa_morphologie: undefined;
  Origine_ethnique: undefined;
  Niveau_etude: undefined;
  Metier: undefined;
  Religion: undefined;
  Signe_astro: undefined;
  Orientation_politique: undefined;
  Tabac: undefined;
  Alcool: undefined;
  Pratique_sportive: undefined;
  Enfants: undefined;
  Revenus: undefined;

  // SettingsNavigator
  Settings: undefined;
  Notifications_settings: undefined;
  Securite_et_privee: undefined;
  Contact_et_FAQ: undefined;
  Aide: undefined;
  Centre_de_securite: undefined;
  Nous_contactez: undefined;
  FAQ: undefined;
  Emplacement: undefined;
  Mode_invisible: undefined;
  Mode_voyage: undefined;
  Mettre_en_pause: undefined;
  Mode_de_connexion: undefined;
  Changer_localisation: undefined;
  Parametre_de_confidentialites: undefined;
  Autorisations_necessaires: undefined;
  Bloquer_contacts: undefined;
  Supprimer_mon_compte: undefined;
  Compte_non_trouve: undefined;

  // RegisterNavigator
  Bienvenue: undefined;
  CreationEtDeveloppement: undefined;
  LoveCoach: undefined;
  LinksLogIn: {LoginRoute: string};
  LinksSignIn: {SignInRoute: string};
  Liens_dinscription: undefined;
  Liens_de_connexion: undefined;
  Recuperation_compte: undefined;
  S_Inscrire: undefined;
  S_inscrire_par_mail: undefined;
  S_inscrire_par_numero: undefined;
  Se_Connecter: undefined;
  Confirmation_email: undefined;
  Confirmation_numero: undefined;
  Recuperation_email: undefined;
  Ville: undefined;
  Acces_Position: undefined;
  Genre: undefined;
  Date_de_naissance: undefined;
  Taille: undefined;
  Langue_parler: undefined;
  Situation: undefined;
  Orientation: undefined;
  Recherche1: undefined;
  Recherche2: undefined;
  Affinite: undefined;
  Rythme1: undefined;
  Rythme2: undefined;
  Prenom: undefined;
  Confirmation_prenom: undefined;
  Profil_multiples: undefined;
  Prenium: undefined;
  Compte: undefined;
  Confirmation_compte: undefined;
  Recuperation_code: undefined;
  Ajouter_photo: undefined;
  Empreinte_vocal: undefined;
  Charte_engagement: undefined;
  Felicitations: undefined;

  // Autres Routes
};
