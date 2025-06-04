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
      text: 'This is Home Button.',
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
      text: 'This is Launchable Application You Can Play.',
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
      text: 'You Can Message Me By WhatsApp here.',
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
      text: 'Please Leave Your Impression Here.',
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
      text: 'You Can Found More About Me Here.',
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
      text: 'You can find All of My Documented Works Here.',
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
      text: 'Want To Book Me For Your Project? You Can Assigned Your Available Date Here. (Still In Development)',
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
          action: tour.next
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


