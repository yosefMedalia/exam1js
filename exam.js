let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };


//   הפונקציה מחזירה נתונים על המפקד בתפקיד "Chief of staff", הנתונים הם: דרגה, שם ומספר טלפון.
// Input: אובייקט המכיל את כלל הנתונים על היחידה
// Output: מחרוזת המכילה את כלל הפרטים הנדרשים

function mission1(militaryUnit) {
    
    return `דרגה: ${militaryUnit.commandStructure.chiefOfStaff.rank}, שם: ${militaryUnit.commandStructure.chiefOfStaff.name}, טלפון: ${militaryUnit.commandStructure.chiefOfStaff.contact.phone}`;
  }
  

//   הפונקציה מחזירה את כמות החיילים ביחידה
// Input: אובייקט המכיל את כלל הנתונים על היחידה
// Output: מחרוזת המכילה את כמות החיילים במספר

  
  function mission2(militaryUnit) {
    return `מספר החיילים ביחידה: ${militaryUnit.personnel.length}`;
  }

//   בנה פונקציה שמעבירה את המשימה הנוכחית (CurrentDeployment) להיסטוריה ומשנה את המשימה הנוכחית למשימה חדשה שהיא מקבלת (לפי האותו פורמט)
// Input: 1. NewDeployment - המשימה החדשה - שים לב לפורמט
// 	 2.  אובייקט המכיל את כלל הנתונים על היחידה
// Output: אובייקט המכיל את כלל הנתונים על היחידה


  function mission3(militaryUnit, newDeployment) {
    // העברת המשימה הנוכחית להיסטוריה
    const currentDeployment = militaryUnit.currentDeployment;
    militaryUnit.history.push({
      eventDate: currentDeployment.startDate,
      eventDescription: `משימה: ${currentDeployment.mission} במיקום: ${currentDeployment.location}`
    });
    militaryUnit.currentDeployment = newDeployment;
  
    return militaryUnit;
  }


//   בנה פונקציה המקבלת נשק (שם לב למה הוא מכיל לפי הפורמט) ומוסיפה אותו במידה והסוג והסטטוס שלו שונה ממה שכבר קיים במערכת, אם ישנו אחד קיים עם אותם הפרטים מוסיפים את הכמות (quantity).
// Input: 1. Firearm Object
//  2.  אובייקט המכיל את כלל הנתונים על היחידה
// Output: אובייקט המכיל את כלל הנתונים על היחידה
// 4. פונקציה להוספת או עדכון נשק
function mission4(militaryUnit, newFirearm) {
    const existingFirearmIndex = militaryUnit.equipment.firearms.findIndex(
      firearm => firearm.type === newFirearm.type && firearm.status === newFirearm.status
    );
  
    if (existingFirearmIndex !== -1) {
      militaryUnit.equipment.firearms[existingFirearmIndex].quantity += newFirearm.quantity;
    } else {
      militaryUnit.equipment.firearms.push(newFirearm);
    }
  
    return militaryUnit;
  }


//   בנה פונקציה המחזירה את אורך כלל ההכשרות ביחד
// Input: אובייקט המכיל את כלל הנתונים על היחידה
// Output: מחרוזת המכילה את כמות כלל השבועות בהכשרה

  
  // 5. פונקציה לחישוב סך משך ההכשרות
  function mission5(militaryUnit) {
    const totalWeeks = militaryUnit.trainingPrograms.reduce(
      (total, program) => total + program.duration,
      0
    );
    return `שבועות${totalWeeks}`;

  }
  module.exports = {
    mission1,
    mission2,
    mission3,
    mission4,
    mission5
  }
  
  
 