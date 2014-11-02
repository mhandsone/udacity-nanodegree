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
  "skillChartDisplay" : function() {
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = !isNaN(parseInt(d3.select("#skillsChart").style("width"))) ? (parseInt(d3.select("#skillsChart").style("width")) - margin.left - margin.right) : 0,
        height = 200 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5);

    var svg = d3.select("#skillsChart").append("svg")
        .attr("class", "skills-entry")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("data.json", function(error, data) {
      x.domain(data.values.map(function(d) { return d.skill; }));

      y.domain([0, d3.max(data.values.map(function(d) { return d.proficiency; }))]);

    var gradient = svg.append("svg:defs")
      .append("svg:linearGradient")
        .attr("id", "barGradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%");

    gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#7db9e8")
      .attr("stop-opacity", 1);

    gradient.append("svg:stop")
      .attr("offset", "50%")
      .attr("stop-color", "#2382e5")
      .attr("stop-opacity", 1);

    gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#7db9e8")
      .attr("stop-opacity", 1);

    var hoverGradient = svg.append("svg:defs")
      .append("svg:linearGradient")
        .attr("id", "barHoverGradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%");

    hoverGradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#3b90e8")
      .attr("stop-opacity", 1);

    hoverGradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#93c5ec")
      .attr("stop-opacity", 1);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Proficiency");

    svg.selectAll(".bar")
        .data(data.values)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.skill); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.proficiency); })
        .attr("height", function(d) { return height - y(d.proficiency); });

    });
  },
  "display" : function () {
    var bioObj = this;

    $('#header').prepend(HTMLheaderStart);

    var formattedName = HTMLheaderName.replace('%data%', bioObj.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bioObj.role);
    var formattedPicture = HTMLbioPic.replace('%data%', bioObj.picture);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bioObj.welcomeMessage);

    $('#header').prepend(formattedPicture);
    $('#firstSightInfo').prepend(formattedRole);
    $('#firstSightInfo').prepend(formattedName);
    $('#firstSightInfo').append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%', bioObj.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bioObj.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bioObj.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bioObj.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bioObj.contacts.location);

    $('#topContacts').append(HTMLcontactStart + formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);

    if (bioObj.hasOwnProperty('skills') && bioObj.skills.length > 0) {
      $('#firstSightInfo').append(HTMLskillsStart);

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
      "name" : "Universidad Tecnologica de Panama",
      "location" : "Panama City, Panama",
      "degree" : "BA",
      "majors" : ["Computer Engineering"],
      "dates" : "2008-2013"
    },
    {
      "name" : "Universidad Interamericana de Panama",
      "location" : "Panama City, Panama",
      "degree" : "Masters",
      "majors" : ["System Administration", "Information Security"],
      "dates" : "2014-2015"
    }
  ],
  "courses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2014"
    },
    {
      "title" : "CCNA",
      "school" : "Cisco Security",
      "dates" : "2013"
    },
    {
      "title" : "Introduction to Perimetral Security",
      "school" : "Universidad Tecnológica de Panamá",
      "dates" : "2012"
    }
  ],
  "display" : function() {
    var educationObj = this;

    if (educationObj.hasOwnProperty('schools') && educationObj.schools.length > 0) {
      for (school in educationObj.schools) {
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', educationObj.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', educationObj.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', educationObj.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', educationObj.schools[school].location);
        var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', educationObj.schools[school].majors.join(", "));

        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors);
      } 
    }

    if (educationObj.hasOwnProperty('courses') && educationObj.courses.length > 0) {
      $('#education').append(HTMLonlineClasses);

      for (course in educationObj.courses) {
        $('#education').append(HTMLonlineStart);

        var formattedClassTitle = HTMLonlineTitle.replace('%data%', educationObj.courses[course].title);
        var formattedClassSchool = HTMLonlineSchool.replace('%data%', educationObj.courses[course].school);
        var formattedClassDates = HTMLonlineDates.replace('%data%', educationObj.courses[course].dates);

        $('.education-entry:last').append(formattedClassTitle + formattedClassSchool + formattedClassDates);
      }
      
    }
  }
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
      
      var formattedProjectImageSlider = '';
      if (projectObj.projects[project].hasOwnProperty('images') && projectObj.projects[project].images.length > 0) {
        var formattedProjectImages = '';
        for (image in projectObj.projects[project].images) {
          formattedProjectImages += HTMLprojectImage.replace('%data%', projectObj.projects[project].images[image]);
        }
        formattedProjectImageSlider = HTMLprojectImageStart.replace('%data%', formattedProjectImages);
      }

      $('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formatedProjectDescription + formattedProjectImageSlider);
    }
  }
}

// Bio
// =============================================================================
bio.display();

// Skill graphs
// =============================================================================
bio.skillChartDisplay();
// Adjust graph on resize.
var doit;
$(window).resize(function() {
  clearTimeout(doit);
  doit = setTimeout(function() {
    $(".skills-entry").remove();
    bio.skillChartDisplay();
  },100);
})

// Education
// =============================================================================
education.display();

// Work
// =============================================================================
work.display();

// Projects
// =============================================================================
projects.display();

// Internationalize button
// =============================================================================
$('#header').prepend(internationalizeButton);

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
