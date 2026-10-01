import React from 'react';
import { 
  Play, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Filter, 
  Settings, 
  Mail, 
  UserCheck, 
  Calendar, 
  Bell, 
  ArrowRight,
  Search,
  LayoutDashboard,
  Users,
  Layers,
  BarChart3
} from 'lucide-react';

export default function BusinessAutomationPage() {
  return (
    <div 
      className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/business bg.png')" }}
    >
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-6 bg-red-500"></span>
              <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
                BUSINESS AUTOMATION
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Automate <br />
              Smarter. <br />
              <span className="text-white">Grow Faster.</span>
            </h1>

            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Connect your tools. Automate your workflows. Save time and scale your business — all in one platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-gray-200 font-medium px-6 py-3 rounded-xl transition-all">
                <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                  <Play className="w-2.5 h-2.5 fill-current text-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Zap className="w-4 h-4 text-gray-300 shrink-0" />
                <span>No-code automation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-gray-300 shrink-0" />
                <span>Secure & reliable</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <TrendingUp className="w-4 h-4 text-gray-300 shrink-0" />
                <span>Built for business growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Workflow Diagram */}
          <div className="lg:col-span-7 relative">
            <div className="flex flex-nowrap items-center justify-between gap-3 overflow-x-auto pb-4 pt-2">
              
              {/* Step 1: Form Submission */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3 min-w-[120px] flex-1 backdrop-blur-md">
                <div className="bg-neutral-800/60 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-xs font-semibold text-white">Form Submission</h4>
                <p className="text-[10px] text-gray-400 mt-1">New lead captured from website</p>
              </div>

              {/* Connecting Line 1 */}
              <div className="h-[2px] w-6 bg-cyan-500/50 shrink-0 relative">
                <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              </div>

              {/* Step 2: Qualify Lead */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3 min-w-[120px] flex-1 backdrop-blur-md relative">
                <span className="absolute -top-2 -right-2 bg-blue-600 text-[9px] px-1.5 py-0.5 rounded-full font-bold text-white flex items-center gap-0.5">
                  <Zap className="w-2.5 h-2.5 fill-current" /> AI
                </span>
                <div className="bg-neutral-800/60 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                  <Filter className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-xs font-semibold text-white">Qualify Lead</h4>
                <p className="text-[10px] text-gray-400 mt-1">AI analyzes and enriches data</p>
              </div>

              {/* Connecting Line 2 */}
              <div className="h-[2px] w-6 bg-green-500/50 shrink-0 relative">
                <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
              </div>

              {/* Step 3: Central Hub */}
              <div className="bg-neutral-900/90 border border-green-500/40 rounded-xl p-3 min-w-[120px] flex-1 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                <div className="bg-neutral-800/80 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                  <Settings className="w-4 h-4 text-green-400 animate-spin-slow" />
                </div>
                <h4 className="text-xs font-semibold text-white">Automate</h4>
                <p className="text-[10px] text-gray-400 mt-1">Trigger workflows across your tools</p>
              </div>

              {/* Connecting Branch Line */}
              <div className="h-[2px] w-6 bg-green-500/50 shrink-0 relative" />

              {/* Step 4: Actions Column */}
              <div className="flex flex-col gap-2 shrink-0">
                <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2 flex items-center gap-2 min-w-[130px]">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold">Send Email</div>
                    <div className="text-[9px] text-gray-400">Personalized outreach</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2 flex items-center gap-2 min-w-[130px]">
                  <UserCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold">Update CRM</div>
                    <div className="text-[9px] text-gray-400">Sync customer data</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2 flex items-center gap-2 min-w-[130px]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold">Schedule Meeting</div>
                    <div className="text-[9px] text-gray-400">Book on calendar</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2 flex items-center gap-2 min-w-[130px]">
                  <Bell className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold">Notify Team</div>
                    <div className="text-[9px] text-gray-400">Instant alerts</div>
                  </div>
                </div>
              </div>

              {/* Connecting Branch Line */}
              <div className="h-[2px] w-6 bg-cyan-500/50 shrink-0 relative" />

              {/* Step 5: Business Growth */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3 min-w-[120px] flex-1 backdrop-blur-md">
                <div className="bg-neutral-800/60 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-xs font-semibold text-white">Business Growth</h4>
                <p className="text-[10px] text-gray-400 mt-1">More leads. Higher conversions.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section: Social Proof Metrics & Dashboard Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">10K+</span>
                <span className="text-xs text-green-400 font-medium">▲</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Businesses Automated</p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">95%</span>
                <span className="text-xs text-green-400 font-medium">▲</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Time Saved on Manual Tasks</p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">3X</span>
                <span className="text-xs text-green-400 font-medium">▲</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Average Growth in Conversions</p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">+68%</span>
                <span className="text-xs text-green-400 font-medium">▲</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Increase in Qualified Leads</p>
            </div>
          </div>

          {/* SaaS Dashboard Perspective Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-neutral-800 bg-[#121318] p-3 shadow-2xl transition-transform hover:scale-[1.01]">
              
              {/* Dashboard Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-gray-400 text-[11px] ml-2 font-medium">FlowPro Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-neutral-800 px-2 py-0.5 rounded text-[10px] text-gray-400 flex items-center gap-1">
                    <Search className="w-2.5 h-2.5" /> Search
                  </div>
                  <div className="w-5 h-5 rounded-full bg-red-600 text-[9px] flex items-center justify-center font-bold">JD</div>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="grid grid-cols-12 gap-3 text-xs">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-neutral-800 pr-2 space-y-2">
                  <div className="flex items-center gap-1.5 text-white bg-neutral-800/60 p-1.5 rounded font-medium text-[11px]">
                    <LayoutDashboard className="w-3 h-3 text-red-500" /> Dashboard
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 p-1.5 rounded text-[11px]">
                    <Zap className="w-3 h-3" /> Automations
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 p-1.5 rounded text-[11px]">
                    <Users className="w-3 h-3" /> Leads
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 p-1.5 rounded text-[11px]">
                    <Layers className="w-3 h-3" /> Integrations
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="col-span-9 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm">Good morning,</h3>
                      <p className="text-[10px] text-gray-400">Your automations are running smoothly.</p>
                    </div>
                    <span className="bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> 12 automation workflows active
                    </span>
                  </div>

                  {/* Summary Metric Strip */}
                  <div className="grid grid-cols-4 gap-2 text-center bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
                    <div>
                      <div className="text-[9px] text-gray-400">Leads Captured</div>
                      <div className="font-bold text-white text-xs">1,248</div>
                      <div className="text-[8px] text-green-400">↑ 24%</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-400">Emails Sent</div>
                      <div className="font-bold text-white text-xs">892</div>
                      <div className="text-[8px] text-green-400">↑ 17%</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-400">Meetings Booked</div>
                      <div className="font-bold text-white text-xs">156</div>
                      <div className="text-[8px] text-green-400">↑ 33%</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-400">Conversion Rate</div>
                      <div className="font-bold text-white text-xs">12.6%</div>
                      <div className="text-[8px] text-green-400">↑ 28%</div>
                    </div>
                  </div>

                  {/* Graph & Status Area */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 mb-2">
                        <span>Lead Growth</span>
                        <span className="text-green-400 font-bold">+68%</span>
                      </div>
                      {/* Simulated Chart */}
                      <div className="h-14 flex items-end justify-between gap-1 pt-2 border-b border-neutral-800">
                        <div className="w-full bg-blue-500/20 h-[30%] rounded-t" />
                        <div className="w-full bg-blue-500/30 h-[45%] rounded-t" />
                        <div className="w-full bg-blue-500/40 h-[40%] rounded-t" />
                        <div className="w-full bg-blue-500/60 h-[65%] rounded-t" />
                        <div className="w-full bg-blue-500/80 h-[80%] rounded-t" />
                        <div className="w-full bg-blue-500 h-[100%] rounded-t" />
                      </div>
                    </div>

                    <div className="col-span-1 bg-neutral-900/60 p-2 rounded-lg border border-neutral-800 flex flex-col justify-between">
                      <div className="text-[10px] text-gray-400">Automation Status</div>
                      <div className="flex items-center justify-center my-1">
                        <div className="w-10 h-10 rounded-full border-2 border-green-400 border-t-cyan-400 flex items-center justify-center text-[9px] font-bold">
                          24
                        </div>
                      </div>
                      <div className="text-[8px] space-y-0.5 text-gray-400">
                        <div className="flex items-center justify-between">
                          <span className="text-green-400">● Running</span>
                          <span>18</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400">● Scheduled</span>
                          <span>4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}