export default function Footer() {
  return (
    <footer id="contactme" className="flex flex-column gap-1">
      <div>
        <p className="regular-text text-center">get in touch</p>
        <h1 className="heading text-center">contact me</h1>
      </div>
      <div style={{borderRadius : 'var(--regular-radius)' , padding: '16px 24px ' ,justifyContent: "center" ,alignItems: "center"}} className=" mobile-flex flex gap-1">
        <div >
        <i class="ri-mail-ai-fill ri-xl"></i>
        <span className="regular-text">rahulacharya8898@gmail.com</span>
        </div>
        <div>
        <i class="ri-linkedin-box-fill ri-xl"></i>
        <span className="regular-text">Rahul Acharya </span>
        </div>
      </div>
      <p className="text-center">Copyright © 2025 All Rights Reserved.</p>
      <p style={{fontSize: '1.25em'}} className="bold text-center">Made with <i class="ri-heart-fill "></i> by Rahul Acharya</p>
    </footer>
  );
}
