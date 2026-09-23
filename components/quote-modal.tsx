// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from "lucide-react";
// import { companyInfo } from "@/lib/data";

// interface QuoteModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   selectedProduct?: string;
// }

// export function QuoteModal({ isOpen, onClose, selectedProduct }: QuoteModalProps) {
//   return (
//     <QuoteModalContent
//       key={selectedProduct || "Smart Digital Podium"}
//       isOpen={isOpen}
//       onClose={onClose}
//       selectedProduct={selectedProduct}
//     />
//   );
// }

// function QuoteModalContent({ isOpen, onClose, selectedProduct }: QuoteModalProps) {
//   const [product, setProduct] = useState(selectedProduct || "Smart Digital Podium");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [notes, setNotes] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//     }, 800);
//   };

//   const handleReset = () => {
//     setIsSubmitted(false);
//     setName("");
//     setEmail("");
//     setPhone("");
//     setNotes("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-black/85 backdrop-blur-md"
//           />

//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", damping: 28, stiffness: 300 }}
//             className="relative w-full max-w-xl max-h-[90vh] bg-[#0E1015]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-y-auto text-white"
//           >
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors border border-white/10"
//               aria-label="Close modal"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             {isSubmitted ? (
//               <div className="text-center py-8 space-y-4">
//                 <div className="w-16 h-16 rounded-full bg-[#FF2B35]/20 border border-[#FF2B35] mx-auto flex items-center justify-center text-[#FF2B35]">
//                   <CheckCircle2 className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold tracking-tight text-white font-display">
//                   Inquiry Received
//                 </h3>
//                 <p className="text-sm text-zinc-300 max-w-sm mx-auto">
//                   Thank you for reaching out to AMIACH Technologies. Our hardware engineering &
//                   sales team will send you the technical datasheet and quotation within 2 business
//                   hours.
//                 </p>
//                 <div className="pt-4">
//                   <button
//                     onClick={handleReset}
//                     className="px-6 py-2.5 rounded-full bg-[#FF2B35] text-white font-semibold text-sm hover:bg-[#E0202A] transition-all shadow-[0_0_20px_rgba(255,43,53,0.3)]"
//                   >
//                     Done & Return
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF2B35] mb-1">
//                     <Sparkles className="w-3.5 h-3.5" />
//                     <span>Commercial & Enterprise Solutions</span>
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
//                     Request Quotation & Specs
//                   </h3>
//                   <p className="text-xs sm:text-sm text-zinc-400 mt-1">
//                     Direct hardware manufacturing inquiries, OEM customization, and project deployment.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
//                       Product of Interest
//                     </label>
//                     <select
//                       value={product}
//                       onChange={(e) => setProduct(e.target.value)}
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF2B35] transition-colors"
//                     >
//                       <option value="Smart Digital Podium" className="bg-[#0D0E11] text-white">
//                         Smart Digital Podium (Apex Series)
//                       </option>
//                       <option value="Self-Service Order Kiosk" className="bg-[#0D0E11] text-white">
//                         Self-Service Order & Pay Kiosk (QuickPay)
//                       </option>
//                       <option value="Slim Digital Signage" className="bg-[#0D0E11] text-white">
//                         32&quot; Slim Digital Signage Totem
//                       </option>
//                       <option value="Architectural Wayfinding Totem" className="bg-[#0D0E11] text-white">
//                         Architectural Mall Wayfinding Totem
//                       </option>
//                       <option value="Slanted Touch Information Kiosk" className="bg-[#0D0E11] text-white">
//                         Slanted Touch Information Kiosk
//                       </option>
//                     </select>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div>
//                       <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         placeholder="John Doe"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF2B35] transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         placeholder="+91 / +1 ..."
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF2B35] transition-colors"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
//                       Corporate / Work Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="john@company.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF2B35] transition-colors"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
//                       Project Notes / Quantity
//                     </label>
//                     <textarea
//                       rows={3}
//                       placeholder="Deployment location, required units, or custom branding requirements..."
//                       value={notes}
//                       onChange={(e) => setNotes(e.target.value)}
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF2B35] transition-colors resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF2B35] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(255,43,53,0.4)] hover:bg-[#E0202A] transition-all disabled:opacity-50"
//                   >
//                     {isSubmitting ? (
//                       <span>Submitting Inquiry...</span>
//                     ) : (
//                       <>
//                         <span>Submit Specification & Price Request</span>
//                         <Send className="w-4 h-4" />
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 {/* Direct quick contact row */}
//                 <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
//                   <div className="flex items-center gap-1.5">
//                     <Phone className="w-3.5 h-3.5 text-[#FF2B35]" />
//                     <span>{companyInfo.phone}</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Mail className="w-3.5 h-3.5 text-[#FF2B35]" />
//                     <span>{companyInfo.email}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }
