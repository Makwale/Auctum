import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ];
  emailForm: FormGroup;

  validationMessages = {
    required: [{ type: "required", message: "This field is required." }],
    email: [
      { type: "required", message: "This field is required." },
      { type: "email", message: "Please enter a valid email." },
    ],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  sendEmail() {
    this.emailForm.markAllAsTouched();
    this.emailForm.updateValueAndValidity();

    if (this.emailForm.valid) {
      const emailTo = "auctuminvestments@outlook.com";
      const emailCC = "";
      const emailSub = "Auctum website";
      const emailBody =
        "My name is " +
        this.emailForm.value.name +
        " " +
        this.emailForm.value.surname +
        ", " +
        this.emailForm.value.message;
      window.open(
        `mailto:${emailTo}?cc=${emailCC}&subject=${emailSub}&body=${emailBody}`,
        "_self"
      );
    }
  }
  isInvalid(form: FormGroup, controlName: string) {
    return form.get(controlName).invalid && form.get(controlName).touched;
  }

  isValid(form: FormGroup, controlName: string) {
    return form.get(controlName).valid && form.get(controlName).touched;
  }

  hasError(form: FormGroup, controlName: string, validationType: string) {
    // eslint-disable-next-line max-len
    return (
      form.get(controlName).hasError(validationType) &&
      (form.get(controlName).dirty || form.get(controlName).touched)
    );
  }
}
