
import useAuth from "@/client/utils/useAuth";
import { useState } from "react";


function ResetPassword() {
   const [phone, setPhone] = useState("");
   const [confirmation, setConfirmation] = useState<any>(null);
   const [otp, setOtp] = useState("");
   const [step, setStep] = useState(1);

   const { setupRecaptcha, verifyOtp } = useAuth();

   const handleSendOtp = async (e: React.FormEvent) => {
      e.preventDefault();

      // নম্বরটা পুরোপুরি +৮৮০১৮২৭০৫৯৫৬৪ ফরম্যাটে চেক করা
      const fullPhone = `+880${phone.slice(1)}`; // যেমন +8801827059564

      if (fullPhone !== "+8801827059564") {
         return alert("Sorry, OTP can only be sent to +8801827059564");
      }

      try {
         const confirmationResult = await setupRecaptcha(fullPhone);
         setConfirmation(confirmationResult);
         setStep(2);
      } catch (error: any) {
         alert(error.message || "OTP sending failed");
      }
   };


   const handleVerifyOtp = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         const result = await verifyOtp(confirmation, otp);
         alert("✅ OTP verified successfully!");
         console.log("User:", result.user);
      } catch (error) {
         alert("❌ Invalid OTP");
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#ff0066] mb-6">
               Reset Password
            </h2>

            {step === 1 && (
               <form onSubmit={handleSendOtp}>
                  <label className="block text-gray-700 font-medium mb-2">
                     Enter your Number:
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden shadow-sm mb-4">
                     <div className="px-3 py-2 border-r bg-gray-50 text-gray-600 font-medium">
                        +880
                     </div>
                     <input
                        type="tel"
                        placeholder="1XXXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 outline-none"
                     />
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-[#ff0066] text-white py-2 rounded-md hover:bg-[#e6005c] transition"
                  >
                     Send OTP Code
                  </button>
               </form>
            )}

            {step === 2 && (
               <form onSubmit={handleVerifyOtp}>
                  <label className="block text-gray-700 font-medium mb-2">
                     Enter OTP:
                  </label>
                  <input
                     type="text"
                     placeholder="6-digit code"
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}
                     required
                     className="w-full px-4 py-3 border rounded-md shadow-sm mb-4"
                  />

                  <button
                     type="submit"
                     className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  >
                     Verify OTP
                  </button>
               </form>
            )}
         </div>

         {/* ✅ এটা DOM-এ থাকতে হবে */}
         <div id="recaptcha-container"></div>
      </div>
   );
}

export default ResetPassword;
