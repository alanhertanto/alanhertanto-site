"use client";
import PhoneFrame from "./components/PhoneFrame";
import Navbar from "./components/Navbar";
import BezelBottom from "./components/BezelBottom";
import AppsBottom from "./components/AppsBottom";
import CalendarWeather from "./components/widget/calendar and weather";
import AppsCollection from "./components/AppsCollection";
import { Analytics } from "@vercel/analytics/next"
import Shepherd from 'shepherd.js';
import { useEffect } from 'react';
import 'shepherd.js/dist/css/shepherd.css';

export default function Home() {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: false,
        cancelIcon: {
          enabled: true
        },
        classes: 'shadow-md bg-purple-dark',
        scrollToHandler: (el) => {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

   tour.addStep({
  id: 'step1',
  text: 'Welcome! This is the <strong>Home Button</strong> , your central hub to reset or navigate back anytime.',
  attachTo: {
    element: '.homeButton',
    on: 'top'
  },
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step2',
  text: 'These are the <strong>Launchable Apps</strong> , feel free to explore and try them out!',
  attachTo: {
    element: '.launchableApps',
    on: 'bottom'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step3',
  text: 'Need to reach me quickly? Tap this button to <strong>chat with me via WhatsApp</strong>.',
  attachTo: {
    element: '.callButton',
    on: 'top'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step4',
  text: 'Have something to say? Drop your thoughts by clicking this <strong>message button</strong> , I’d love to hear from you.',
  attachTo: {
    element: '.messageButton',
    on: 'top'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step5',
  text: 'Curious about who I am? Click here to <strong>view my profile and learn more about me</strong>.',
  attachTo: {
    element: '.profileButton',
    on: 'top'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step6',
  text: 'Want to see what I’ve built? This is the gateway to my <strong>project gallery and documented works</strong>.',
  attachTo: {
    element: '.galleryButton',
    on: 'top'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep({
  id: 'step7',
  text: 'Thinking of collaborating with me? You’ll soon be able to <strong>book a date directly from here!</strong> (Coming soon)',
  attachTo: {
    element: '.calendar',
    on: 'bottom'
  },
  buttons: [
    {
      text: 'Previous',
      action: tour.back
    },
    {
      text: 'Finish Tour',
      action: tour.complete // better than `tour.next` for last step
    }
  ]
});


    tour.start();
  }, []);

  return (
    <PhoneFrame>
      <Navbar />
      <div className="h-full flex flex-col mt-20 mb-20 items-start justify-start p-4 text-white text-xl font-semibold">
        <CalendarWeather />
        <AppsCollection />
      </div>
      <AppsBottom />
      <BezelBottom />
      <Analytics />
    </PhoneFrame>

  );
}


