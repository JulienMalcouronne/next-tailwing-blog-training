import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size="16" />;
      case 'twitter':
        return <Twitter size="16" />;
      case 'instagram':
        return <Instagram size="16" />;
      case 'youtube':
        return <Youtube size="16" />;
      case 'github':
        return <Github size="16" />;
      default:
        return <Github size="16" />;
    }
  };
  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
