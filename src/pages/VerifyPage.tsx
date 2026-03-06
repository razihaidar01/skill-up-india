import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, XCircle, Phone, Mail, Globe, MapPin, Shield, Award } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import siatLogo from "@/assets/siat-logo.jpeg";

interface CertificateRecord {
  certificate_no: string;
  name: string;
  course: string;
  training_from: string;
  training_to: string;
  performance: string;
  issue_date: string;
  course_incharge: string;
  Director: string;
  status: string;
}

type VerifyState = "idle" | "loading" | "found" | "not_found";

export default function VerifyPage() {
  const [certInput, setCertInput] = useState("");
  const [state, setState] = useState<VerifyState>("idle");
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [allCerts, setAllCerts] = useState<CertificateRecord[]>([]);

  // Load certificates JSON once
  useEffect(() => {
    fetch("/certificates.json")
      .then((res) => res.json())
      .then((data: CertificateRecord[]) => setAllCerts(data))
      .catch(() => setAllCerts([]));
  }, []);

  const verifyCert = useCallback(
    (certNo: string) => {
      if (!certNo.trim()) return;
      setState("loading");
      // Simulate brief loading for UX
      setTimeout(() => {
        const found = allCerts.find(
          (c) => c.certificate_no.toLowerCase() === certNo.trim().toLowerCase()
        );
        if (found) {
          setCertificate(found);
          setState("found");
        } else {
          setCertificate(null);
          setState("not_found");
        }
      }, 600);
    },
    [allCerts]
  );

  // Auto-detect from URL param
  useEffect(() => {
    if (allCerts.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const certNo = params.get("cert");
    if (certNo) {
      setCertInput(certNo);
      verifyCert(certNo);
    }
  }, [allCerts, verifyCert]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyCert(certInput);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="py-10 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <img src={siatLogo} alt="SIAT Logo" className="h-20 w-20 rounded-full border-4 border-white/30 shadow-lg" />
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold">
                  SAHARSA INSTITUTE OF ADVANCE TECHNOLOGY
                </h1>
                <p className="text-sm opacity-80 mt-1 font-hindi">सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी</p>
                <p className="text-xs opacity-70 mt-1">Baijnathpur, Saharsa | Reg. No.: SH-6061 | UDYAM: UDYAM-BR-29-0035052</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Shield className="h-6 w-6" />
                <h2 className="font-heading text-xl md:text-2xl font-semibold">Certificate Verification</h2>
              </div>
              <p className="text-sm opacity-80 max-w-lg">
                Verify the authenticity of certificates issued by SIAT. Enter the certificate number or scan the QR code.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-xl">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex gap-3"
            >
              <Input
                placeholder="Enter Certificate No."
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                className="text-base h-12"
              />
              <Button type="submit" className="h-12 px-6 rounded-full font-heading" disabled={state === "loading"}>
                <Search className="h-5 w-5 mr-1" />
                Verify
              </Button>
            </motion.form>
          </div>
        </section>

        {/* Results */}
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <AnimatePresence mode="wait">
              {state === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="inline-block h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="mt-4 text-muted-foreground">Verifying certificate…</p>
                </motion.div>
              )}

              {state === "found" && certificate && (
                <motion.div
                  key="found"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="relative bg-card rounded-2xl border border-border shadow-card overflow-hidden"
                >
                  {/* Verified Banner */}
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-200 dark:border-emerald-800 px-6 py-4 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    <span className="font-heading font-bold text-emerald-700 dark:text-emerald-400 text-lg">
                      CERTIFICATE VERIFIED
                    </span>
                  </div>

                  {/* Content with stamp overlay */}
                  <div className="relative p-6 md:p-8">
                    {/* Animated Stamp */}
                    <motion.div
                      initial={{ scale: 3, opacity: 0, rotate: -30 }}
                      animate={{ scale: 1, opacity: 0.15, rotate: -18 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                      className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 pointer-events-none select-none"
                    >
                      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-emerald-600 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-emerald-600 font-heading font-extrabold text-lg md:text-xl leading-tight">VERIFIED</p>
                          <p className="text-emerald-600 font-heading font-bold text-[10px] mt-1">SIAT SAHARSA</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Certificate Details */}
                    <div className="space-y-4 relative z-10">
                      <DetailRow label="Certificate No" value={certificate.certificate_no} />
                      <DetailRow label="Name" value={certificate.name} highlight />
                      <DetailRow label="Course" value={certificate.course} />
                      <DetailRow label="Training Duration" value={`${certificate.training_from} to ${certificate.training_to}`} />
                      <DetailRow label="Overall Performance" value={certificate.performance} />
                      <DetailRow label="Date of Issue" value={certificate.issue_date} />
                      <DetailRow label="Course Incharge" value={certificate.course_incharge} />
                      <DetailRow label="Director" value={certificate.Director} />
                    </div>

                    {/* QR Code */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 pt-6 border-t border-border/50 flex flex-col items-center gap-2"
                    >
                      <QRCodeSVG
                        value={`https://siat.in/verify?cert=${encodeURIComponent(certificate.certificate_no)}`}
                        size={120}
                        level="H"
                        includeMargin
                        className="rounded-lg"
                      />
                      <p className="text-xs text-muted-foreground">Scan to verify this certificate</p>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="bg-muted/50 px-6 py-4 text-xs text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Baijnathpur, Saharsa</span>
                    <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91 7004216219</span>
                    <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> siat.sws@gmail.com</span>
                    <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> www.siat.in</span>
                  </div>
                </motion.div>
              )}

              {state === "not_found" && (
                <motion.div
                  key="not_found"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card rounded-2xl border border-destructive/30 shadow-card p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <XCircle className="h-16 w-16 text-destructive mx-auto" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-destructive mt-4">CERTIFICATE NOT VALID</h3>
                  <p className="text-muted-foreground mt-2 text-sm max-w-md mx-auto">
                    The certificate number you entered was not found in our records. Please double-check the number or contact us for assistance.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                    <a href="tel:+917004216219" className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" /> +91 7004216219
                    </a>
                    <a href="mailto:siat.sws@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" /> siat.sws@gmail.com
                    </a>
                  </div>
                </motion.div>
              )}

              {state === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Award className="h-16 w-16 text-muted-foreground/30 mx-auto" />
                  <p className="text-muted-foreground mt-4 text-sm">
                    Enter a certificate number above to verify its authenticity.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function DetailRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-border/50 last:border-0">
      <span className="text-sm text-muted-foreground font-medium sm:w-44 shrink-0">{label}:</span>
      <span className={`text-sm font-medium ${highlight ? "text-primary font-bold text-base" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}
