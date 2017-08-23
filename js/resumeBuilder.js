/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio ={
	name : "Maram Alroshoud",
	role : "Specialist, Business Support",
	contacts:
	{ mobile :"0532110009",
	email : "malrshooud@gmail.com",
	github: "@maramalr",
	twitter:"@imaramalrshoud",
	location : "2389 Ibn Az Zaytuni, Al Olaya"
},
welcomeMessage : "Welcome to my resume!",
skills: ["Web Development Skills","Technical skills", "Flexable" , "Quick Learner"],
biopic :"images/cloud.png"
};

bio.display = function() {
	
	var formattedName = HTMLheaderName.replace("%data%" , bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedcontact = HTMLcontactGeneric.replace("%data%", bio.contacts);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var fromattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName); 
	$("#header").append(formattedImage); 
	$("#topContacts").append(formattedMobile);
	$("#header").append(formattedMsg);
	$("#topContacts").append(fromattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGit);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(fromattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGit);
	$("#footerContacts").append(formattedLocation);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var mySkills = [] ;
		for(var i=0 ; i< bio.skills.length; i++)
		{ 
			var skill = bio.skills[i];
			mySkills.push(skill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

			$("#skills").append(formattedSkill);
		}

	}

};
bio.display();

var work = {
	jobs : [{
		title : "Specialist, Business Support",
		employer : "Etihad Atheeb Telecommuncation Company",
		location : "Riyadh 12431",
		dates: "2016 - Present",
		description: "Manage and Verifiy Business Orders " }]
	};


	work.display = function()
	{
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDate);

			var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedworkLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);


		}

	};
	work.display();

	var education = { 
		"schools": [ {

			name: "Princess Noura University",
			location: "Riyadh 13414",
			degree: "Bachelor",
			majors: ["Computer Science"],
			dates: "2011 - 2016",
			url: "www.pnu.edu.sa",
		}] ,

		onlineCourses: [{
			title:"Web Development",
			school: "ShawAcademy",
			dates: "2016",
			url: "ShawAcademy.com"
		}, 
		{
			title:"Business Communication Skills",
			school: "Saudi Academy",
			dates: "2016",
			url: "ShawAcademy.com"
		}]

	};
	education.display = function()
	{
		for (var school in education.schools)
		{	
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolLocation);
			
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var course in education.onlineCourses)
		{ 
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedonlineTitle);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedonlineSchool);

			var formattedonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedonlinedate);

			var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedonlineUrl);

		}
	};

	education.display();

	var projects = {
		"projects": [ {
			"title": "Educational Web App",
			"dates": "2016",
			"description" : "Website built to help kids to learn and discover concepts",
			"images": ["images/project1.png"]
		},
		{
			"title": "Image Processing Program",
			"dates": "2015",
			"description" : "Developed an Image Processing program using MATLAB Software ",
			"images": ["images/project2.png"]
		}
		] };

		projects.display = function() {
			for (var project in projects.projects)
			{
				$("#projects").append(HTMLprojectStart);

				var formattedTitles = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitles);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescriptions = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescriptions);

				if(projects.projects[project].images.length >0)
					{ for (var image in projects.projects[project].images)
						{
							var formattedImage =HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
							$(".project-entry:last").append(formattedImage);
						}

					}
				}
			};

			projects.display();



			$("#mapDiv").append(googleMap);
