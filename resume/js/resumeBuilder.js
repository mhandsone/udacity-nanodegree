// Declaration of objects to include in the resume
// =============================================================================
var bio = {
  "name" : "Cristiano Amici",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "6110-6585",
    "email" : "amicicristiano@gmail.com",
    "twitter" : "twitter.com/cristianoamici",
    "github" : "AChris07",
    "location" : "Panama City"
  },
  "picture" : "https://es.gravatar.com/userimage/30799064/e9be13420db1df0a9d2872cc7e4f7834.jpg?size=200",
  "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt illum ratione sit itaque, perferendis qui quidem quos autem minus, dolore veritatis cumque magni cum ipsum repudiandae! Sint dolorum, odio.",
  "skills" : ['Web design', 'Javascript', 'Node.JS', 'PHP', 'Drupal', 'Java (EE, Spring IO)', 'Polyglot'],
  "display" : function () {
    var bioObj = this;

    var formattedName = HTMLheaderName.replace('%data%', bioObj.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bioObj.role);
    var formattedPicture = HTMLbioPic.replace('%data%', bioObj.picture);

    $('#header').prepend(formattedPicture);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace('%data%', bioObj.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bioObj.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bioObj.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bioObj.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bioObj.contacts.location);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bioObj.welcomeMessage);

    $('#topContacts').append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
    $('#header').append(formattedWelcomeMsg);

    if (bioObj.hasOwnProperty('skills') && bioObj.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      var formattedSkills = ''
      for(skill in bioObj.skills) {
        formattedSkills += HTMLskills.replace('%data%', bioObj.skills[skill]);
      }
    $('#skills').append(formattedSkills);
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "Universidad Tecnológica de Panamá",
      "location" : "Panama City, Panama",
      "degree" : "BA",
      "majors" : ["Computer Engineering"],
      "graduation" : 2013
    },
    {
      "name" : "Universidad Interamericana de Panamá",
      "location" : "Panama City, Panama",
      "degree" : "Masters",
      "majors" : ["System Administration", "Information Security"],
      "graduation" : 2015
    }
  ],
  "courses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "date" : 2014
    },
    {
      "title" : "CCNA",
      "school" : "Cisco Security",
      "date" : 2013
    },
    {
      "title" : "Introduction to Perimetral Security",
      "school" : "Universidad Tecnológica de Panamá",
      "date" : 2012
    }
  ]
}

var work = {
  "jobs" : [
    {
      "position" : "Java EE Developer",
      "employer" : "Cibernetica, S.A.",
      "dates" : "May 2013 - March 2014",
      "location" : "Parque Benito Juarez, El Carmen, Panama City, Panama",
      "description" : "Development of enterprise solutions and web platforms in Java EE, with SAP integration. Mostly back-end initially, ended up doing plenty of front-end implementations (site structure and theming, JS scripts for front-end features and validations, Ajax handling)."
    },
    {
      "position" : "Front-end Web Developer",
      "employer" : "Rootstack, S.A.",
      "dates" : "March 2014 - Present",
      "location" : "Hato Pintado, Panama City, Panama",
      "description" : "Development of web pages, eCommerce platforms and mobile solutions in PHP and Java, mostly working with Drupal, Sass, Compass and Bootstrap, as well as other open-source solutions. Also, I tend to manage back-end to develop and modify Drupal custom modules, as well as Drupal site building."
    }
  ],
  "display" : function() {
    if (work.hasOwnProperty('jobs') && work.jobs.length > 0) {
      for(job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].position);

        $('.work-entry:last').append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedDescription = HTMLworkDates.replace('%data%', work.jobs[job].description);

        $('.work-entry:last').append(formattedDates + formattedLocation + formattedDescription);
      }
    }
  }
}

var projects = {
  "projects" : [
    {
      "title" : "Sample Project 1",
      "dates" : "2014",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta architecto odio rem harum sit voluptatum iusto, cupiditate neque natus nulla a, quia veritatis! Inventore nulla officiis a repudiandae adipisci autem.",
      "images" : [
        "http://placepic.me/starwars/600-600-sketch",
        "http://placepic.me/starwars/600-600"
      ]
    }
  ],
  "display" : function () {
    var projectObj = this;

    for (project in projectObj.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projectObj.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projectObj.projects[project].dates);
      var formatedProjectDescription = HTMLprojectDescription.replace('%data%', projectObj.projects[project].description);
      var formattedProjectImages = '';
      if (projectObj.projects[project].hasOwnProperty('images') && projectObj.projects[project].images.length > 0) {
        for (image in projectObj.projects[project].images) {
          formattedProjectImages += HTMLprojectImage.replace('%data%', projectObj.projects[project].images[image]);
        }
      }

      $('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formatedProjectDescription + formattedProjectImages);
    }
  }
}

// Bio
// =============================================================================
bio.display();

// Work
// =============================================================================
work.display();

// Projects
// =============================================================================
projects.display();

// Internationalize button
// =============================================================================
//$('#header').prepend(internationalizeButton);

// Google map
// =============================================================================
$('#mapDiv').append(googleMap);

// Helper functions
// =============================================================================
function inName(isInternationalized) {
  var fullName = bio.name;

  var fullNameArray = fullName.trim().split(" ");

  var formattedFirstName = (typeof fullNameArray[0] != 'undefined') ? fullNameArray[0].slice(0,1).toUpperCase() + fullNameArray[0].slice(1).toLowerCase() : '';

  if (isInternationalized === 'internationalized') {
    var formattedLastName = (typeof fullNameArray[1] != 'undefined') ? fullNameArray[1].slice(0,1).toUpperCase() + fullNameArray[1].slice(1).toLowerCase() : '';
  }
  else {
    var formattedLastName = (typeof fullNameArray[1] != 'undefined') ? fullNameArray[1].toUpperCase() : '';
  }

  return formattedFirstName + ' ' + formattedLastName;
}
