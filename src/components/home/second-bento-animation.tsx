import { Icons } from '@/components/home/icons';
import { OrbitingCircles } from '@/components/home/ui/orbiting-circle';

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-black p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <img 
          src="/kortix-symbol.svg" 
          alt="Kortix Symbol" 
          className="size-10 filter brightness-0 invert"
        />
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg" alt="Excel" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" className="size-8" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Calendar" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" alt="Notion" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" alt="WhatsApp" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlesheets/googlesheets-original.svg" alt="Google Sheets" className="size-8" />
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" alt="Salesforce" className="size-8" />
            </div>
            <div className="size-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="size-8" />
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" alt="Chrome" className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/x/x-original.svg" alt="X" className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" alt="Instagram" className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropbox/dropbox-original.svg" alt="Dropbox" className="size-6" />
            </div>
            <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 opacity-75">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="size-6" />
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
