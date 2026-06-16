// import { Routes, Route, Navigate } from "react-router-dom";
// import { useApp } from "../Context/AppContext";
// // import { ReactNode } from "react";
// // import { Role } from "../types";
// import RoleRoute from "./RoleRoute";

// // Auth pages
// import SplashScreen from "../Pages/Auth/SplashScreen";
// import Onboarding from "../Pages/Auth/Onboarding";
// import RoleSelect from "../Pages/Auth/RoleSelect";
// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";
// import Register2 from "../Pages/Auth/Register2";
// import Register3 from "../Pages/Auth/Register3";
// import SetPassword from "../Pages/Auth/SetPassword";
// import Success from "../Pages/Auth/Success";
// import ForgotPassword from "../Pages/Auth/ForgotPassword";

// // Patient pages
// import PatientHome from "../Pages/Patient/PatientHome";
// import PatientFindDoctor from "../Pages/Patient/PatientFindDoctor";
// import PatientDoctorList from "../Pages/Patient/PatientDoctorList";
// import PatientDoctorProfile from "../Pages/Patient/PatientDoctorProfile";
// import PatientChat from "../Pages/Patient/PatientChat";
// import PatientWallet from "../Pages/Patient/PatientWallet";
// import PatientSettings from "../Pages/Patient/PatientSettings";

// // Doctor pages
// import FindPatient from "../Pages/Doctor/FindPatient";
// import Home from "../Pages/Doctor/Home/Home";
// import Chat from "../Pages/Doctor/Chat/Chat";
// import Wallet from "../Pages/Doctor/Wallet/Wallet";
// import Settings from "../Pages/Doctor/Settings";
// // import Notifications from "../Pages/Doctor/Notifications/Notifications";
// import Cards from "../Pages/Doctor/Card/Cards";

// import MedicalRecord from "../Pages/Doctor/Patients/MedicalRecord";
// import AddMoney from "../Pages/Doctor/Wallet/AddMoney";
// import Profile from "../Pages/More/Links/Profile";
// import ChangePassword from "../Pages/More/Links/ChangePassword";
// import Identification from "../Pages/More/Links/Identification/Identification";
// import Subscription from "../Pages/More/Links/Subscription/Subscription";
// import ReferAFriend from "../Pages/More/Links/ReferAFriend";
// import More from "../Pages/More/More";
// import AddCards from "../Pages/Doctor/Card/AddCards";
// import Notifications from "../Pages/Doctor/Notifications/Notifications";
// import BVNVerification from "../Pages/More/Links/Identification/BVNVerification";
// import IDDocumentVerification from "../Pages/More/Links/Identification/IDDocumentVerification";
// import HomeAddressVerification from "../Pages/More/Links/Identification/HomeAddressVerification";
// // import AddCards from "../Pages/Doctor/Card/AddCards";
// // import ChatConversation from "../Pages/Doctor/Chat/ChatConversation";

// // Main routes

// const AppRoutes = () => {
//   const { isAuthenticated, role } = useApp();

//   return (
//     <Routes>
//       {/* ── Public / Auth routes ── */}
//       <Route path="/" element={<SplashScreen />} />
//       <Route path="/onboarding" element={<Onboarding />} />
//       <Route path="/role-select" element={<RoleSelect />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/register/step2" element={<Register2 />} />
//       <Route path="/register/step3" element={<Register3 />} />
//       <Route path="/register/set-password" element={<SetPassword />} />
//       <Route path="/register/success" element={<Success />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/doctor/cards/add" element={<AddCards />} />

//       {/* ── Patient routes ── */}
//       <Route
//         path="/patient/home"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientHome />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/find-doctor"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientFindDoctor />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/doctors"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientDoctorList />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/doctors/:id"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientDoctorProfile />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/chat"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientChat />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/wallet"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientWallet />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/patient/settings"
//         element={
//           <RoleRoute requiredRole="patient">
//             <PatientSettings />
//           </RoleRoute>
//         }
//       />

//       {/* ── Doctor routes ── */}
//       <Route
//         path="/doctor/home"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Home />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/doctor/patients"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <FindPatient />
//           </RoleRoute>
//         }
//       />
//       <Route
//         path="/doctor/chat"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Chat />
//           </RoleRoute>
//         }
//       />

//       <Route path="/doctor/chat/:chatId" element={<Chat />} />

//       <Route
//         path="/doctor/wallet"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Wallet />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/notifications"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Notifications />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/cards"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Cards />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/settings"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Settings />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/wallet/add-money"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <AddMoney />
//           </RoleRoute>
//         }
//       />

//       {/* More links on Doctor */}

//       <Route
//         path="/doctor/more"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <More />{" "}
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/profile"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Profile />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/changepassword"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <ChangePassword />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/identification"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Identification />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/more/identification/bvn"
//         element={<BVNVerification />}
//       />

//       <Route
//         path="/doctor/more/identification/id-document"
//         element={<IDDocumentVerification />}
//       />

//       <Route
//         path="/doctor/more/identification/home-address"
//         element={<HomeAddressVerification />}
//       />

//       <Route
//         path="/doctor/subscription"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <Subscription />
//           </RoleRoute>
//         }
//       />

//       <Route
//         path="/doctor/referral"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <ReferAFriend />
//           </RoleRoute>
//         }
//       />

//       {/* ── Fallback ── */}
//       {/* If someone lands on an unknown URL, send them to the right place */}
//       <Route
//         path="*"
//         element={
//           isAuthenticated ? (
//             <Navigate
//               to={role === "doctor" ? "/doctor/home" : "/patient/home"}
//               replace
//             />
//           ) : (
//             <Navigate to="/" replace />
//           )
//         }
//       />

//       <Route
//         path="/doctor/patients/:id"
//         element={
//           <RoleRoute requiredRole="doctor">
//             <MedicalRecord />
//           </RoleRoute>
//         }
//       />

//       {/* <Route path="/doctor/chat" element={<Chat />} /> */}

//       {/* <Route path="/doctor/chat/:chatId" element={<ChatConversation />} /> */}

//       {/* <Route path="/doctor/chat/:chatId/case-note" element={<ChatCaseNote />} /> */}
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route, Navigate } from "react-router-dom";
import { useApp } from "../Context/AppContext";
import RoleRoute from "./RoleRoute";

// Auth pages
import SplashScreen from "../Pages/Auth/SplashScreen";
import Onboarding from "../Pages/Auth/Onboarding";
import RoleSelect from "../Pages/Auth/RoleSelect";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Register2 from "../Pages/Auth/Register2";
import Register3 from "../Pages/Auth/Register3";
import SetPassword from "../Pages/Auth/SetPassword";
import Success from "../Pages/Auth/Success";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

// Patient pages
import PatientHome from "../Pages/Patient/PatientHome";
import PatientFindDoctor from "../Pages/Patient/PatientFindDoctor";
import PatientDoctorList from "../Pages/Patient/PatientDoctorList";
import PatientDoctorProfile from "../Pages/Patient/PatientDoctorProfile";
import PatientChat from "../Pages/Patient/PatientChat";
import PatientWallet from "../Pages/Patient/PatientWallet";
import PatientSettings from "../Pages/Patient/PatientSettings";

// Doctor pages
import FindPatient from "../Pages/Doctor/FindPatient";
import Home from "../Pages/Doctor/Home/Home";
import Chat from "../Pages/Doctor/Chat/Chat";
import Wallet from "../Pages/Doctor/Wallet/Wallet";
import Settings from "../Pages/Doctor/Settings";
import Cards from "../Pages/Doctor/Card/Cards";
import MedicalRecord from "../Pages/Doctor/Patients/MedicalRecord";
import AddMoney from "../Pages/Doctor/Wallet/AddMoney";
import AddCards from "../Pages/Doctor/Card/AddCards";
import Notifications from "../Pages/Doctor/Notifications/Notifications";

// Settings & More sub-links
import Profile from "../Pages/More/Links/Profile";
import ChangePassword from "../Pages/More/Links/ChangePassword";
import Identification from "../Pages/More/Links/Identification/Identification";
import Subscription from "../Pages/More/Links/Subscription/Subscription";
import ReferAFriend from "../Pages/More/Links/ReferAFriend";
import More from "../Pages/More/More";
import BVNVerification from "../Pages/More/Links/Identification/BVNVerification";
import IDDocumentVerification from "../Pages/More/Links/Identification/IDDocumentVerification";
import HomeAddressVerification from "../Pages/More/Links/Identification/HomeAddressVerification";

const AppRoutes = () => {
  const { isAuthenticated, role } = useApp();

  return (
    <Routes>
      {/* ── Public / Auth routes ── */}
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/role-select" element={<RoleSelect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/step2" element={<Register2 />} />
      <Route path="/register/step3" element={<Register3 />} />
      <Route path="/register/set-password" element={<SetPassword />} />
      <Route path="/register/success" element={<Success />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ── Patient routes ── */}
      <Route
        path="/patient/home"
        element={
          <RoleRoute requiredRole="patient">
            <PatientHome />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/find-doctor"
        element={
          <RoleRoute requiredRole="patient">
            <PatientFindDoctor />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/doctors"
        element={
          <RoleRoute requiredRole="patient">
            <PatientDoctorList />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/doctors/:id"
        element={
          <RoleRoute requiredRole="patient">
            <PatientDoctorProfile />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/chat"
        element={
          <RoleRoute requiredRole="patient">
            <PatientChat />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/wallet"
        element={
          <RoleRoute requiredRole="patient">
            <PatientWallet />
          </RoleRoute>
        }
      />
      <Route
        path="/patient/settings"
        element={
          <RoleRoute requiredRole="patient">
            <PatientSettings />
          </RoleRoute>
        }
      />

      {/* ── Doctor routes ── */}
      <Route
        path="/doctor/home"
        element={
          <RoleRoute requiredRole="doctor">
            <Home />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/patients"
        element={
          <RoleRoute requiredRole="doctor">
            <FindPatient />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/chat"
        element={
          <RoleRoute requiredRole="doctor">
            <Chat />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/chat/:chatId"
        element={
          <RoleRoute requiredRole="doctor">
            <Chat />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/wallet"
        element={
          <RoleRoute requiredRole="doctor">
            <Wallet />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/wallet/add-money"
        element={
          <RoleRoute requiredRole="doctor">
            <AddMoney />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/notifications"
        element={
          <RoleRoute requiredRole="doctor">
            <Notifications />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/cards"
        element={
          <RoleRoute requiredRole="doctor">
            <Cards />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/cards/add"
        element={
          <RoleRoute requiredRole="doctor">
            <AddCards />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/settings"
        element={
          <RoleRoute requiredRole="doctor">
            <Settings />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/patients/:id"
        element={
          <RoleRoute requiredRole="doctor">
            <MedicalRecord />
          </RoleRoute>
        }
      />

      {/* Doctor settings panel details */}
      <Route
        path="/doctor/more"
        element={
          <RoleRoute requiredRole="doctor">
            <More />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/profile"
        element={
          <RoleRoute requiredRole="doctor">
            <Profile />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/changepassword"
        element={
          <RoleRoute requiredRole="doctor">
            <ChangePassword />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/identification"
        element={
          <RoleRoute requiredRole="doctor">
            <Identification />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/more/identification/bvn"
        element={
          <RoleRoute requiredRole="doctor">
            <BVNVerification />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/more/identification/id-document"
        element={
          <RoleRoute requiredRole="doctor">
            <IDDocumentVerification />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/more/identification/home-address"
        element={
          <RoleRoute requiredRole="doctor">
            <HomeAddressVerification />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/subscription"
        element={
          <RoleRoute requiredRole="doctor">
            <Subscription />
          </RoleRoute>
        }
      />
      <Route
        path="/doctor/referral"
        element={
          <RoleRoute requiredRole="doctor">
            <ReferAFriend />
          </RoleRoute>
        }
      />

      {/* ── 🌎 Global Fallback (Must stay at the bottom) ── */}
      <Route
        path="*"
        element={
          isAuthenticated ? (
            <Navigate
              to={role === "doctor" ? "/doctor/home" : "/patient/home"}
              replace
            />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
