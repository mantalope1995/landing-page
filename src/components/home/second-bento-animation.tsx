import { OrbitingCircles } from '@/components/home/ui/orbiting-circle';
import { DimaticLogo } from '@/components/sidebar/dimatic-logo';
import {
  SiSlack,
  SiGmail,
  SiMicrosoftexcel,
  SiGooglecalendar,
  SiNotion,
  SiWhatsapp,
  SiGooglesheets,
  SiSalesforce,
  SiLinkedin,
  SiGooglechrome,
  SiX,
  SiInstagram,
  SiFacebook,
  SiDropbox,
  SiGithub,
} from '@icons-pack/react-simple-icons';

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-black p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <div className="filter brightness-0 invert flex items-center justify-center">
          <DimaticLogo size={32} showText={false} />
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiSlack className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiGmail className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiMicrosoftexcel className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiGooglecalendar className="size-8" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiNotion className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiWhatsapp className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiGooglesheets className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiDropbox className="size-8" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiSalesforce className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <SiLinkedin className="size-8" />
            </div>
          </OrbitingCircles>

          {/* Additional outer ring for more tools */}
          <OrbitingCircles
            index={3}
            iconSize={50}
            radius={320}
            speed={0.3}
          >
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <SiGooglechrome className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <SiX className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <SiInstagram className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <SiFacebook className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <SiGithub className="size-6" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
