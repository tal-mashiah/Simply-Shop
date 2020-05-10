import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        form: {
            fullName: {},
            phone: {},
            email: {},
            city: {},
            street: {},
            number: {},
            apartment: {},
            postal: {},
            mailbox: {},
            notes: {}
        },
        regex: {
            required: /(.|\s)*\S(.|\s)*/,
            langAndMin2Char: /^[a-zA-Z\u0590-\u05fe\s"'-]{2,}$/,
            twoWords: /^([a-zA-Z\u0590-\u05fe]{2,40} +[a-zA-Z\u0590-\u05fe]{2,40})$/,
            phone: /^05\d([-.]{0,1})\d{3}([-.]{0,1})\d{4}$/,
            // eslint-disable-next-line
            email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        },
        errors: {
            required: 'שדה זה הוא חובה',
            langAndMin2Char: 'חובה להזין שתי אותיות ומעלה בעברית או באנגלית',
            twoWords: 'חובה להזין שם פרטי ושם משפחה',
            phone: 'מספר טלפון אינו תקין',
            email: 'כתובת מייל אינה תקינה',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { form } = this.state;
        const currInput = form[name];
        currInput.value = value;
        const validationAttr = event.target.getAttribute("validation");
        if (validationAttr) {
            const validations = validationAttr.split(' ');
            for (const validation of validations) {
                this.validate(validation, currInput);
                if (!currInput.isValid) break;
            }
        } else {
            currInput.isValid = true;
        }
        this.setState({ form: { ...form, [name]: currInput } });
    }

    validate = (validation, currInput) => {

        const { regex, errors } = this.state;
        if (!regex[validation].test(currInput.value)) {
            currInput.error = errors[validation];
            currInput.isValid = false;
        } else {
            currInput.error = '';
            currInput.isValid = true;
        }
    }

    render() {
        const { fullName, phone, email, city, street, number, postal } = this.state.form;
        console.log(this.state.form);

        return (
            <form className="flex justify-around">
                <div className="section-container">
                    <h2>פרטים אישיים:</h2>

                    <div className={fullName.error ? "input-container error" : fullName.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="fullName">שם מלא <i className="fas fa-star-of-life"></i></label>
                        <input type="text" onChange={this.handleChange} id="fullName" name="fullName" placeholder="שם מלא" validation="required langAndMin2Char twoWords"></input>
                        <div className="form-error">{!fullName || fullName.error}
                            <div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className={phone.error ? "input-container error" : phone.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="phone">טלפון נייד <i className="fas fa-star-of-life"></i></label>
                        <input type="tel" onChange={this.handleChange} id="phone" name="phone" placeholder="טלפון נייד" validation="required phone"></input>
                        <div className="form-error">{!phone || phone.error}
                            <div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className={email.error ? "input-container error" : email.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="email">אימייל <i className="fas fa-star-of-life"></i></label>
                        <input type="text" onChange={this.handleChange} id="email" name="email" placeholder="example@google.com" validation="required email"></input>
                        <div className="form-error">{!email || email.error}
                            <div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>

                <div className="section-container">
                    <h2>פרטי משלוח:</h2>

                    <div className={city.error ? "input-container error" : city.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="city">עיר / יישוב <i className="fas fa-star-of-life"></i></label>
                        <input type="text" onChange={this.handleChange} id="city" name="city" placeholder="עיר / יישוב" validation="required langAndMin2Char"></input>
                        <div className="form-error">{!city || city.error}
                            <div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className={street.error ? "input-container error" : street.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="street">רחוב <i className="fas fa-star-of-life"></i></label>
                        <input type="text" onChange={this.handleChange} id="street" name="street" placeholder="שם הרחוב" validation="required"></input>
                        <div className="form-error">{!street || street.error}
                            < div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className={number.error ? "input-container error" : number.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="number">מספר בית <i className="fas fa-star-of-life"></i></label>
                        <input type="number" onChange={this.handleChange} id="number" name="number" placeholder="מספר בית" validation="required"></input>
                        <div className="form-error">{!number || number.error}
                            < div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div >

                    <div className="input-container">
                        <label htmlFor="apartment">דירה:</label>
                        <input type="number" onChange={this.handleChange} id="apartment" name="apartment" placeholder="מספר דירה"></input>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className={postal.error ? "input-container error" : postal.isValid ? "input-container valid" : "input-container"}>
                        <label htmlFor="postal">מיקוד <i className="fas fa-star-of-life"></i></label>
                        <input type="number" onChange={this.handleChange} id="postal" name="postal" placeholder="מיקוד" validation="required"></input>
                        <div className="form-error">{!postal || postal.error}
                            < div class="arrow-up"></div>
                        </div>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div >

                    <div className="input-container">
                        <label htmlFor="mailbox">ת.ד:</label>
                        <input type="text" onChange={this.handleChange} id="mailbox" name="mailbox" placeholder="ת.ד"></input>
                        <i class="fas fa-times-circle"></i>
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <div className="input-container">
                        <label htmlFor="notes">הערות:</label>
                        <textarea onChange={this.handleChange} id="notes" name="notes" rows="2"></textarea>
                    </div>
                </div >
            </form >
        )
    }
}