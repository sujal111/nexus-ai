import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Rates', href: '#rates' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.legal.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Approval AI Corporation. All rights reserved.
        </p>
        
        <div className="mt-6 text-center text-xs leading-5 text-gray-500">
          <p>123 MG Road<br/>Bangalore, Karnataka 560001<br/>+91 80 1234 5678<br/>Mon-Sat, 9am-6pm IST<br/>hello@approvalai.com<br/>We'll respond within 24 hours</p>
        </div>
      </div>
    </footer>
  );
}
