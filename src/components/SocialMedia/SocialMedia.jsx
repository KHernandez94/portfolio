import { FaLinkedin, FaWhatsapp, FaTelegram, FaDownload } from 'react-icons/fa';
import profile from './../../../public/pdf/cvkhernandez.pdf';


export const SocialMedia = () => {
  return (
    <>
      <div className='col-lg-6 col-md-4 col-sm-12'>
        <a className='btn btn-secondary text-decoration-none' role="button" href={profile} target="_blank" rel="noopener noreferrer" download="KATHERINE_HERNANDEZ_CV.pdf" >
          <FaDownload /> Descargar CV
        </a>
      </div>
      <div className='col-lg-6 col-md-8 col-sm-12 d-flex justify-content-evenly'>
        <a className='btn btn-informative'
          href='https://www.linkedin.com/in/katherinehernandez94/'
          target='_blank'
          style={{
            textDecoration: 'none',
            color: '#0072b1',
          }} type="button"><FaLinkedin size={30} /></a>

        <a className='btn btn-informative' href="https://wa.me/5491124095696" target='_blank'
          style={{
            textDecoration: 'none',
            color: '#4DC25C',
          }} type="button"><FaWhatsapp size={30} /></a>

        <a
          className='btn btn-informative'
          href='https://www.linkedin.com/in/katherinehernandez94/'
          target='_blank'
          style={{
            textDecoration: 'none',
            color: '#229ED9',

          }} type="button"><FaTelegram size={30} /></a>
      </div>
    </>

  )
}

