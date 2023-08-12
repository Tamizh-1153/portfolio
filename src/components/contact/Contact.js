import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import "./contact.css"

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Enter valid email address")
        .required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {

      const mail={
        name:values.name,
        email:values.email,
        subject:values.subject,
        message:values.message,
      }

      emailjs
        .send("tamizh_work", "portfolio_contact", mail, "nqfvXcrGLf71P5Zol")
        .then(
          (result) => {
            console.log(result.text)
            toast.success('Email sent',{
              position: 'bottom-left',
              autoClose:3000,
              theme:'dark',
            })
          },
          (error) => {
            console.log(error.text)
            toast.error("Sending failed", {
              position: "bottom-left",
              autoClose: 3000,
              theme: "dark",
            })
          }
        )

      resetForm({ values: "" })
    },
  })

  return (
    <section id="contact" className="contact container section">
      <h2 className="contact_title">Get in contact</h2>
      <p className="contact_description">
        Whether you are starting a project or have business inquiries, my inbox
        is always open so feel free to reach out and I will get back to you as
        soon as possible
      </p>
      <div className="contact_container">
        <div className="social_media">
          {/* Twitter */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/tamilarasan1153"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="261"
              height="261"
              viewBox="0 0 261 261"
              fill="none"
            >
              <g filter="url(#filter0_d_307_368)">
                <rect
                  x="40.724"
                  y="36.6238"
                  width="180"
                  height="180"
                  rx="32"
                  fill="white"
                />
                <rect
                  x="41.224"
                  y="37.1238"
                  width="179"
                  height="179"
                  rx="31.5"
                  stroke="white"
                />
              </g>
              <path
                d="M152.067 89H163.567L138.442 120.769L168 164H144.856L126.73 137.781L105.988 164H94.481L121.355 130.019L93 89H116.731L133.116 112.965L152.067 89ZM148.031 156.385H154.403L113.268 96.2154H106.43L148.031 156.385Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_d_307_368"
                  x="0.723999"
                  y="0.623779"
                  width="260"
                  height="260"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_307_368"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_307_368"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tamizh1153"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="261"
              height="261"
              viewBox="0 0 261 261"
              fill="none"
            >
              <g filter="url(#filter0_d_307_369)">
                <rect
                  x="40.724"
                  y="36.6238"
                  width="180"
                  height="180"
                  rx="32"
                  fill="white"
                />
                <rect
                  x="41.224"
                  y="37.1238"
                  width="179"
                  height="179"
                  rx="31.5"
                  stroke="white"
                />
              </g>
              <g clip-path="url(#clip0_307_369)">
                <path
                  d="M168.504 86H93.4961C91.7732 86 90.1209 86.6455 88.9027 87.7946C87.6844 88.9436 87 90.502 87 92.127V162.873C87 164.498 87.6844 166.056 88.9027 167.205C90.1209 168.354 91.7732 169 93.4961 169H168.504C170.227 169 171.879 168.354 173.097 167.205C174.316 166.056 175 164.498 175 162.873V92.127C175 90.502 174.316 88.9436 173.097 87.7946C171.879 86.6455 170.227 86 168.504 86ZM113.229 156.706H99.9983V117.067H113.229V156.706ZM106.604 111.574C105.104 111.566 103.639 111.139 102.395 110.347C101.152 109.555 100.185 108.433 99.6166 107.122C99.0484 105.812 98.9044 104.373 99.2028 102.985C99.5012 101.598 100.229 100.325 101.293 99.3277C102.358 98.3299 103.712 97.652 105.185 97.3795C106.657 97.107 108.183 97.252 109.568 97.7963C110.954 98.3406 112.137 99.2598 112.969 100.438C113.801 101.616 114.245 103 114.243 104.416C114.257 105.363 114.069 106.304 113.69 107.182C113.31 108.059 112.747 108.856 112.034 109.524C111.322 110.192 110.473 110.718 109.541 111.07C108.608 111.422 107.609 111.594 106.604 111.574ZM161.996 156.74H148.771V135.085C148.771 128.699 145.893 126.728 142.177 126.728C138.254 126.728 134.404 129.517 134.404 135.247V156.74H121.173V117.096H133.897V122.589H134.068C135.345 120.151 139.818 115.984 146.644 115.984C154.027 115.984 162.002 120.116 162.002 132.221L161.996 156.74Z"
                  fill="#0A66C2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_307_369"
                  x="0.723999"
                  y="0.623779"
                  width="260"
                  height="260"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_307_369"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_307_369"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_307_369">
                  <rect
                    width="88"
                    height="83"
                    fill="white"
                    transform="translate(87 86)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          {/* Github */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Tamizh-1153"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="261"
              height="261"
              viewBox="0 0 261 261"
              fill="none"
            >
              <g filter="url(#filter0_d_22_662)">
                <rect
                  x="40.724"
                  y="36.5939"
                  width="180"
                  height="180"
                  rx="32"
                  fill="white"
                />
                <rect
                  x="41.224"
                  y="37.0939"
                  width="179"
                  height="179"
                  rx="31.5"
                  stroke="white"
                />
              </g>
              <path
                d="M130.276 77.4224C102.666 77.4224 80.2761 99.8078 80.2761 127.423C80.2761 149.514 94.6027 168.256 114.469 174.868C116.968 175.331 117.886 173.783 117.886 172.463C117.886 171.27 117.839 167.331 117.818 163.153C103.907 166.178 100.972 157.254 100.972 157.254C98.6978 151.475 95.4207 149.938 95.4207 149.938C90.8844 146.835 95.7626 146.898 95.7626 146.898C100.784 147.251 103.427 152.051 103.427 152.051C107.887 159.695 115.124 157.485 117.978 156.208C118.426 152.976 119.722 150.77 121.152 149.522C110.046 148.257 98.3716 143.97 98.3716 124.811C98.3716 119.353 100.325 114.892 103.524 111.391C103.004 110.131 101.293 105.046 104.008 98.1585C104.008 98.1585 108.207 96.8146 117.761 103.284C121.75 102.176 126.027 101.62 130.276 101.602C134.526 101.62 138.806 102.176 142.802 103.284C152.346 96.8146 156.539 98.1585 156.539 98.1585C159.26 105.046 157.548 110.131 157.029 111.391C160.234 114.892 162.174 119.352 162.174 124.811C162.174 144.015 150.478 148.244 139.344 149.482C141.137 151.033 142.735 154.077 142.735 158.741C142.735 165.431 142.677 170.816 142.677 172.463C142.677 173.793 143.577 175.352 146.112 174.861C165.968 168.242 180.276 149.507 180.276 127.423C180.276 99.8078 157.89 77.4224 130.276 77.4224Z"
                fill="#161614"
              />
              <path
                d="M99.0028 148.649C98.893 148.897 98.5016 148.972 98.1459 148.801C97.7832 148.638 97.5793 148.299 97.6969 148.05C97.8048 147.794 98.1961 147.723 98.5581 147.895C98.9216 148.058 99.1286 148.399 99.0028 148.649ZM101.462 150.843C101.224 151.064 100.758 150.962 100.441 150.612C100.114 150.264 100.053 149.798 100.295 149.573C100.541 149.352 100.993 149.456 101.321 149.805C101.648 150.157 101.711 150.62 101.462 150.844L101.462 150.843ZM103.15 153.651C102.843 153.864 102.342 153.664 102.032 153.22C101.726 152.775 101.726 152.242 102.039 152.028C102.35 151.815 102.843 152.007 103.157 152.448C103.463 152.9 103.463 153.433 103.149 153.651L103.15 153.651ZM106.003 156.903C105.729 157.205 105.145 157.124 104.718 156.712C104.281 156.309 104.159 155.736 104.434 155.434C104.711 155.131 105.298 155.217 105.729 155.626C106.163 156.028 106.295 156.604 106.003 156.903H106.003ZM109.691 158.001C109.57 158.392 109.008 158.571 108.442 158.404C107.876 158.233 107.506 157.774 107.62 157.378C107.738 156.984 108.302 156.799 108.873 156.977C109.438 157.147 109.809 157.603 109.691 158.001H109.691ZM113.888 158.467C113.902 158.879 113.422 159.221 112.827 159.229C112.229 159.241 111.746 158.908 111.74 158.502C111.74 158.086 112.209 157.747 112.807 157.737C113.401 157.725 113.888 158.057 113.888 158.467ZM118.011 158.309C118.083 158.711 117.669 159.124 117.079 159.234C116.499 159.34 115.961 159.092 115.887 158.693C115.815 158.28 116.236 157.867 116.816 157.76C117.407 157.658 117.936 157.9 118.011 158.309Z"
                fill="#161614"
              />
              <defs>
                <filter
                  id="filter0_d_22_662"
                  x="0.723999"
                  y="0.593872"
                  width="260"
                  height="260"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="20" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_22_662"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_22_662"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
        </div>
        <div className="contact_form_container">
          <form className="contact_form" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className='form_error'>{formik.errors.name}</p>
            ): null}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email &&  formik.errors.email ? (
              <p className='form_error'>{formik.errors.email}</p>
            ) : null}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <p className='form_error'>{formik.errors.subject} </p>
            ) : null}
            <textarea
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              cols="40"
              rows="5"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className='form_error'>{formik.errors.message} </p>
            ) : null}
            <button type="submit" className="contact_btn btn">Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
