import { socials } from '../../data.js'

function Contact() {
  return (
    <div className="flex flex-col items-center pb-5">
      <h1 className="overviewtitle blueunderline">Get in touch</h1>
      <ul className='flex flex-col gap-4 pt-5 px-8'>
        {socials.map((social) => {
          return (
            <li key={[social.name, social.username]}>
              <a className="flex items-center gap-3" href={social.url} target="_blank" rel="noopener noreferrer">
                <img className={`h-10 w-10 ${social.name === 'GitHub' ? 'bg-white rounded-full' : ''}`} src={social.logo} alt={social.name} />
                {social.username}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Contact;
