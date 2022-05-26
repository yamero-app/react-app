// List of builders
const builders = [
  {
    name: 'sarthak',
    href: 'https://twitter.com/0xSarthak',
  },
  {
    name: 'chandrakant',
    href: 'https://twitter.com/_Chandrakant19',
  },
  {
    name: 'abhay',
    href: '',
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-center left-0 items-center bottom-0 w-full h-20 border-t">
      <p>
        built by <Name link={builders[0].href} name={builders[0].name} />
        {', '}
        <Name link={builders[1].href} name={builders[1].name} />
        {' and '}
        <Name link={builders[2].href} name={builders[2].name} />
      </p>
    </footer>
  );
};

// Link component for Names
const Name = ({ link, name }) => (
  <a
    target="_blank"
    className="font-medium"
    rel="noopener noreferrer"
    href={link}
  >
    {name}
  </a>
);

export default Footer;
