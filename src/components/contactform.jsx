import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const mail = {
    to: "contato@mailserver.com",
    subject: "Contato via website",
    template: "template_vxdqg4r",
    service: "service_o1770tn",
    user: "user_ob7ANYoUgam3fIOOSo6f7"
}

var templateParams = {
   form_name: 'your name',
   form_subject: 'default subject',
   form_message: 'this should be the user message',
   reply_to: 'donotreply@server.com'
};


const ContactForm = (props) => {

   const [ formState, setFormState ] = useState('form-status-none');
   const { register, handleSubmit, errors, reset } = useForm();
   const onSubmit = data => {
      setFormState('form-status-sending');
      templateParams.form_name    = data.name;
      templateParams.form_subject = data.subject;
      templateParams.form_message = data.message;
      templateParams.reply_to     = data.contactemail;

      emailjs.send(mail.service, mail.template, templateParams, mail.user)
	      .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormState('form-status-success');
            setTimeout(()=>{setFormState('form-status-none')}, 4000); // replace form status
	      }, (err) => {
            console.log('FAILED...', err);
            setFormState('form-status-error');
	   });
   };

   return(
       <>
       
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column contactform success'>
        <div className={formState}></div>
        <label htmlFor='name'>
           <small className='col-3'>Name</small>
           <input name='name' placeholder='Digite o seu nome completo' type='text' ref={register( {required: true })} className='col' />
        </label>
        <label htmlFor='contactemail'>
           <small className='col-3'>email</small>
           <input name='contactemail' placeholder='nome@email.com.br por exemplo' type='email' ref={register( {required: true })} className='col' />
        </label>
        <label htmlFor='subject'>
           <small >Assunto</small>
           <select name='subject' ref={register( {required: false })}>
               <option value='Comercial'>Comercial</option>
               <option value='Information'>Informações</option>
               <option value='Business'>Projetos</option>
               <option value='Other'>Outro Assunto</option>
           </select>
        </label>
        <label htmlFor='message'>
           <small>Sua mensagem</small>
           <textarea name='message' placeholder='Digite aqui o conteúdo de sua mensagem e depois selecione o botão "enviar mensagem".' ref={register( {required: true })}/>
        </label>
        <div className="formbuttons">
            <input type="submit" className="btn btn-primary mr-2" value="Enviar mensagem" />
            <input type="reset" className="btn btn-danger" value="Limpar" onClick={()=>reset()}/>
        </div>
     </form>
     </>
    )
}

export default ContactForm
