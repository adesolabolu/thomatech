import { Car, Cctv, Sun, Shield, Lock, Zap } from 'lucide-react';

const services = [
  {
    title: "Car Tracking Systems",
    description: "Advanced GPS tracking solutions allowing you to monitor your vehicle's location in real-time, view route history, and remotely demobilize the engine if stolen.",
    icon: Car,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "CCTV Installation",
    description: "High-definition security cameras for homes and businesses. Access live feeds from anywhere via your smartphone with crystal-clear night vision.",
    icon: Cctv,
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    title: "Solar & Inverter Solutions",
    description: "Say goodbye to power outages. We install premium solar panels, deep-cycle batteries, and intelligent inverters scaled to your energy needs.",
    icon: Sun,
    color: "text-brand-accent",
    bgColor: "bg-amber-50"
  },
  {
    title: "Access Control Systems",
    description: "Manage who enters your premises. We offer biometric scanners, RFID card readers, and smart locks for enhanced physical security.",
    icon: Lock,
    color: "text-slate-700",
    bgColor: "bg-slate-100"
  },
  {
    title: "Perimeter Fencing",
    description: "Electric fencing and automated gate systems designed to deter intruders and provide a robust first line of defense for your property.",
    icon: Shield,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Electrical Wiring",
    description: "Professional residential and commercial electrical wiring layout, ensuring safety and optimal power distribution for all your security devices.",
    icon: Zap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-6">
            Comprehensive Solutions Under One Roof
          </h3>
          <p className="text-lg text-slate-600">
            We provide end-to-end installation and maintenance services, ensuring your assets are protected and your power stays uninterrupted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-display font-bold text-brand-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
