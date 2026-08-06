import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Search, Filter, ExternalLink, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Schemes.css";

const Schemes = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  // Comprehensive government schemes data with detailed information
  const schemesData = [
    {
      id: 1,
      title: "PM Kisan Samman Nidhi",
      category: "agriculture",
      description:
        "Direct income support of ₹6,000 per year to eligible farmer families",
      shortDescription: "Direct income support to eligible farmer families",
      detailedDescription:
        "PM Kisan Samman Nidhi is a Central Sector Scheme with 100% funding from the Government of India. The scheme provides income support of ₹6,000 per year to all eligible farmer families across the country in three equal installments of ₹2,000 each every four months.",
      eligibility:
        "Small and marginal farmers with cultivable land up to 2 hectares",
      detailedEligibility: [
        "Small and marginal farmers with cultivable land up to 2 hectares",
        "Farmer families with combined landholding up to 2 hectares",
        "All categories of farmers including SC/ST/OBC",
        "Excludes institutional landholders, government employees, and income tax payers",
      ],
      benefits: "₹6,000 per year in three equal installments",
      detailedBenefits: [
        "₹6,000 per year in three equal installments of ₹2,000 each",
        "Direct bank transfer to registered bank accounts",
        "No repayment required",
        "Annual renewal not required",
        "Covers all farmer families across India",
      ],
      howToApply: [
        "Visit the official PM Kisan portal (pmkisan.gov.in)",
        'Click on "Farmer Registration"',
        "Fill the registration form with required details",
        "Upload necessary documents (Aadhaar, land records, bank details)",
        "Submit the form and note the registration number",
      ],
      documents: [
        "Aadhaar card",
        "Land ownership documents",
        "Bank account details",
        "Passport size photograph",
        "Mobile number",
      ],
      officialLink: "https://pmkisan.gov.in/",
      icon: "🌾",
      launchDate: "December 2018",
      targetBeneficiaries: "14 crore+ farmer families",
      budget: "₹75,000 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1551",
        email: "pmkisan-ict@gov.in",
        website: "pmkisan.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=PMKisan_Registration_Tutorial",
    },
    {
      id: 2,
      title: "PM Fasal Bima Yojana",
      category: "agriculture",
      description: "Comprehensive crop insurance scheme for farmers",
      shortDescription: "Crop insurance for farmers against natural calamities",
      detailedDescription:
        "PM Fasal Bima Yojana is a crop insurance scheme that provides comprehensive crop insurance coverage at a very low premium rate. The scheme aims to reduce the premium burden on farmers and ensure early settlement of claims.",
      eligibility: "All farmers growing notified crops",
      detailedEligibility: [
        "All farmers growing notified crops",
        "Sharecroppers and tenant farmers",
        "Cultivators of food crops and oilseeds",
        "Annual commercial and horticultural crops",
      ],
      benefits: "Crop damage compensation and premium subsidy",
      detailedBenefits: [
        "Comprehensive risk coverage for crops",
        "Premium as low as 1.5% of sum insured",
        "Claims settled within 2 months",
        "Coverage for natural calamities and pests",
        "No upper limit on government subsidy",
      ],
      howToApply: [
        "Contact nearest Common Service Centre (CSC)",
        "Visit authorized bank branch",
        "Apply through crop insurance company",
        "Submit required documents and premium",
        "Receive insurance certificate",
      ],
      documents: [
        "Aadhaar card",
        "Land records",
        "Bank account details",
        "Crop details and area",
        "Premium payment receipt",
      ],
      officialLink: "https://pmfby.gov.in/",
      icon: "🌱",
      launchDate: "January 2016",
      targetBeneficiaries: "All farmers",
      budget: "₹16,000 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1551",
        email: "support@pmfby.gov.in",
        website: "pmfby.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=PMFasalBima_Application_Guide",
    },
    {
      id: 3,
      title: "Beti Bachao Beti Padhao",
      category: "women",
      description:
        "Scheme for survival, protection and education of girl child",
      shortDescription:
        "Empowering girl children through education and awareness",
      detailedDescription:
        "Beti Bachao Beti Padhao is a Government of India scheme that aims to generate awareness and improve the efficiency of welfare services intended for girls in India. The scheme focuses on preventing gender-biased sex selection and ensuring survival and protection of the girl child.",
      eligibility: "Families with girl children",
      detailedEligibility: [
        "Girl child born on or after January 22, 2015",
        "Parents must be Indian citizens",
        "Family income should be below ₹7.5 lakhs per annum",
        "Maximum of two girl children per family",
        "Must be enrolled in recognized school",
      ],
      benefits: "Education support and awareness programs",
      detailedBenefits: [
        "Sukanya Samriddhi Account with 8.0% interest rate",
        "Maximum deposit limit of ₹1.5 lakhs per year",
        "Tax benefits under Section 80C of Income Tax Act",
        "Maturity period of 21 years",
        "Partial withdrawal for education after 18 years",
      ],
      howToApply: [
        "Visit any authorized bank or post office",
        "Fill the Sukanya Samriddhi Account opening form",
        "Submit required documents",
        "Make initial deposit (minimum ₹250)",
        "Account will be opened in the name of the girl child",
      ],
      documents: [
        "Birth certificate of the girl child",
        "Aadhaar card of parents and child",
        "Address proof",
        "Income certificate",
        "Passport size photographs",
      ],
      officialLink: "https://wcd.nic.in/bbbp-schemes",
      youtubeVideo:
        "https://www.youtube.com/watch?v=BetiBachao_Application_Process",
      icon: "👧",
      launchDate: "January 2015",
      targetBeneficiaries: "Girl children and their families",
      budget: "₹100 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "1098",
        email: "bbbp-wcd@gov.in",
        website: "wcd.nic.in/bbbp-schemes",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=SukanyaSamriddhi_Account_Guide",
    },
    {
      id: 4,
      title: "PM Awas Yojana",
      category: "housing",
      description: "Housing for All by 2022 - affordable housing scheme",
      shortDescription: "Affordable housing for economically weaker sections",
      detailedDescription:
        "Pradhan Mantri Awas Yojana (PMAY) is a flagship mission of the Government of India to provide affordable housing to the urban poor. The scheme aims to provide housing for all by 2022 and includes both urban and rural components.",
      eligibility: "Economically weaker sections",
      detailedEligibility: [
        "Economically Weaker Section (EWS) with annual income up to ₹3 lakhs",
        "Low Income Group (LIG) with annual income between ₹3-6 lakhs",
        "Middle Income Group (MIG) with annual income between ₹6-18 lakhs",
        "Must not own a pucca house anywhere in India",
        "Must not have availed any central assistance under any housing scheme",
      ],
      benefits: "Financial assistance for house construction",
      detailedBenefits: [
        "Interest subsidy on home loans up to ₹2.67 lakhs",
        "Credit-linked subsidy for MIG categories",
        "Affordable housing in partnership with private developers",
        "Subsidy for construction of new houses",
        "Benefit for enhancement of existing houses",
      ],
      howToApply: [
        "Visit the official PMAY portal (pmaymis.gov.in)",
        'Click on "Citizen Assessment"',
        "Select your category (EWS/LIG/MIG)",
        "Fill the assessment form with personal and income details",
        "Upload required documents",
        "Submit the form and note the assessment number",
      ],
      documents: [
        "Aadhaar card",
        "Income certificate",
        "Caste certificate (if applicable)",
        "Bank account details",
        "Property documents (if applicable)",
        "Employment certificate",
      ],
      officialLink: "https://pmaymis.gov.in/",
      icon: "🏠",
      launchDate: "June 2015",
      targetBeneficiaries: "2 crore+ households",
      budget: "₹2.03 lakh crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-11-3377",
        email: "support@pmay.gov.in",
        website: "pmaymis.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=PMAY_Housing_Scheme_Application",
    },
    {
      id: 5,
      title: "Ayushman Bharat",
      category: "health",
      description: "National Health Protection Mission for healthcare coverage",
      shortDescription: "Health coverage up to ₹5 lakhs per family per year",
      detailedDescription:
        "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY) is the largest government-funded healthcare program in the world. It provides health coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
      eligibility: "Economically disadvantaged families",
      detailedEligibility: [
        "Families identified in SECC 2011 database",
        "Rural families falling under deprivation criteria",
        "Urban families with specific occupational categories",
        "Families without any earning adult member",
        "Families with disabled member and no able-bodied adult",
      ],
      benefits: "Health coverage up to ₹5 lakhs per family per year",
      detailedBenefits: [
        "Health coverage up to ₹5 lakhs per family per year",
        "Covers pre and post hospitalization expenses",
        "No restriction on family size",
        "Covers 1,393 medical procedures",
        "Cashless treatment at empaneled hospitals",
        "Portability across India",
      ],
      howToApply: [
        "Check eligibility on official website (pmjay.gov.in)",
        "Enter your mobile number and Aadhaar number",
        "Verify your details and family information",
        "Download your Ayushman card",
        "Visit any empaneled hospital for treatment",
        "Show your Ayushman card and Aadhaar for verification",
      ],
      documents: [
        "Aadhaar card",
        "Ration card",
        "Income certificate",
        "Caste certificate (if applicable)",
        "Domicile certificate",
      ],
      officialLink: "https://pmjay.gov.in/",
      icon: "🏥",
      launchDate: "September 2018",
      targetBeneficiaries: "50 crore+ beneficiaries",
      budget: "₹6,400 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "14555",
        email: "support@pmjay.gov.in",
        website: "pmjay.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=PMJAY_Health_Card_Registration",
    },
    {
      id: 6,
      title: "Skill India Mission",
      category: "youth",
      description: "National skill development and training program",
      shortDescription: "Free skill training and certification for youth",
      detailedDescription:
        "Skill India Mission is a campaign launched by the Government of India to train over 40 crore people in India in different skills by 2022. The mission aims to create opportunities, space and scope for the development of the talents of the Indian youth.",
      eligibility: "Youth aged 15-45 years",
      detailedEligibility: [
        "Age between 15-45 years",
        "Indian citizen",
        "Minimum educational qualification varies by course",
        "Unemployed youth, school dropouts, and existing workers",
        "Women, SC/ST, and differently-abled persons given priority",
      ],
      benefits: "Free skill training and certification",
      detailedBenefits: [
        "Free skill training in various sectors",
        "Placement assistance after training",
        "Certification from recognized institutions",
        "Stipend during training period",
        "Access to job fairs and recruitment drives",
        "Support for self-employment",
      ],
      howToApply: [
        "Visit the official Skill India portal (skillindia.gov.in)",
        "Browse available training programs by sector",
        "Select your preferred course and training center",
        "Fill the online application form",
        "Upload required documents",
        "Submit the application and note the reference number",
      ],
      documents: [
        "Aadhaar card",
        "Educational certificates",
        "Caste certificate (if applicable)",
        "Income certificate",
        "Passport size photographs",
        "Address proof",
      ],
      officialLink: "https://skillindia.gov.in/",
      icon: "🎯",
      launchDate: "July 2015",
      targetBeneficiaries: "40 crore+ people by 2022",
      budget: "₹17,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-102-8000",
        email: "support@skillindia.gov.in",
        website: "skillindia.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=SkillIndia_Training_Registration",
    },
    {
      id: 7,
      title: "PM Employment Generation Programme",
      category: "employment",
      description: "Credit-linked subsidy program for self-employment",
      shortDescription:
        "Subsidized loans for entrepreneurs and small businesses",
      detailedDescription:
        "PM Employment Generation Programme (PMEGP) is a credit-linked subsidy program for generating self-employment opportunities through establishment of micro-enterprises in the non-farm sector by helping traditional artisans and unemployed youth.",
      eligibility: "Entrepreneurs and small business owners",
      detailedEligibility: [
        "Individuals above 18 years of age",
        "Self-help groups and institutions",
        "Cooperative societies and trusts",
        "Minimum educational qualification: Class VIII pass",
        "Project cost should not exceed ₹25 lakhs",
      ],
      benefits: "Subsidized loans and financial assistance",
      detailedBenefits: [
        "Subsidy up to 35% of project cost",
        "Margin money subsidy up to 25%",
        "Interest subsidy for first 3 years",
        "Collateral-free loans up to ₹10 lakhs",
        "Technical and financial support",
        "Training and skill development",
      ],
      howToApply: [
        "Visit nearest KVIC office or authorized bank",
        "Fill the application form with project details",
        "Submit required documents and project report",
        "Undergo interview and project evaluation",
        "Get approval and loan disbursement",
        "Start your business venture",
      ],
      documents: [
        "Aadhaar card and PAN card",
        "Educational certificates",
        "Project report and business plan",
        "Quotations for machinery/equipment",
        "Property documents (if applicable)",
        "Bank statements and income proof",
      ],
      officialLink: "https://www.kviconline.gov.in/",
      icon: "💼",
      launchDate: "2008-09",
      targetBeneficiaries: "Lakhs of entrepreneurs",
      budget: "₹8,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-102-8000",
        email: "pmegp@kvic.org.in",
        website: "kviconline.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=PMEGP_Loan_Application_Process",
    },
    {
      id: 8,
      title: "Sarva Shiksha Abhiyan",
      category: "education",
      description: "Universal elementary education program",
      shortDescription:
        "Free and compulsory education for children aged 6-14 years",
      detailedDescription:
        "Sarva Shiksha Abhiyan (SSA) is the Government of India's flagship program for achieving Universalization of Elementary Education (UEE) in a time bound manner. The program aims to provide free and compulsory education to all children in the age group of 6-14 years.",
      eligibility: "Children aged 6-14 years",
      detailedEligibility: [
        "All children in the age group of 6-14 years",
        "Children from disadvantaged groups and weaker sections",
        "Children with special needs",
        "Girl children and children from SC/ST communities",
        "Children from minority communities",
      ],
      benefits: "Free and compulsory education",
      detailedBenefits: [
        "Free and compulsory elementary education",
        "Mid-day meal program for nutritional support",
        "Free textbooks and uniforms",
        "Special focus on girls and disadvantaged groups",
        "Quality education with trained teachers",
        "Infrastructure development in schools",
      ],
      howToApply: [
        "Visit nearest government school or education office",
        "Fill the admission form with required details",
        "Submit birth certificate and address proof",
        "Get admission in appropriate class",
        "Receive free textbooks and uniforms",
        "Benefit from mid-day meal program",
      ],
      documents: [
        "Birth certificate",
        "Aadhaar card",
        "Address proof",
        "Caste certificate (if applicable)",
        "Income certificate (for mid-day meal)",
        "Previous school records (if any)",
      ],
      officialLink: "https://education.gov.in/",
      icon: "📚",
      launchDate: "2000-01",
      targetBeneficiaries: "All children aged 6-14 years",
      budget: "₹6,000 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1551",
        email: "ssa@gov.in",
        website: "education.gov.in",
      },
      youtubeVideo:
        "https://www.youtube.com/watch?v=SSA_Education_Scheme_Enrollment",
    },
    {
      id: 9,
      title: "Ayushman Bharat – PMJAY",
      category: "health",
      description: "Health insurance scheme for poor families",
      shortDescription: "₹5 lakh health cover per family",
      detailedDescription:
        "PMJAY provides cashless health insurance coverage of up to ₹5 lakh per family per year.",
      eligibility: "Economically weaker families",
      detailedEligibility: [
        "Families listed in SECC",
        "No income limit",
        "Indian citizen",
      ],
      benefits: "Health insurance coverage",
      detailedBenefits: [
        "₹5 lakh per family",
        "Cashless treatment",
        "Covers pre & post hospitalization",
      ],
      howToApply: [
        "Check eligibility online",
        "Visit Ayushman Mitra",
        "Get Ayushman card",
      ],
      documents: ["Aadhaar card", "Ration card", "Mobile number"],
      officialLink: "https://pmjay.gov.in/",
      icon: "🏥",
      launchDate: "September 2018",
      targetBeneficiaries: "Poor families",
      budget: "₹6,400 crore",
      status: "Active",
      contactInfo: {
        tollFree: "14555",
        email: "pmjay@gov.in",
        website: "pmjay.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PMJAY_Guide",
    },
    {
      id: 10,
      title: "Pradhan Mantri Ujjwala Yojana",
      category: "women",
      description: "Free LPG connections for women from BPL households",
      shortDescription: "Clean cooking fuel for poor households",
      detailedDescription:
        "PMUY provides LPG connections to women from Below Poverty Line households to promote clean and safe cooking practices.",
      eligibility: "Women from BPL households",
      detailedEligibility: [
        "Female applicant",
        "BPL household",
        "No existing LPG connection",
      ],
      benefits: "Free LPG connection",
      detailedBenefits: [
        "Free LPG gas connection",
        "Subsidized refills",
        "Improved health and safety",
      ],
      howToApply: [
        "Visit nearest LPG distributor",
        "Submit PMUY application form",
        "Provide Aadhaar and ration card",
      ],
      documents: ["Aadhaar card", "BPL ration card", "Bank account details"],
      officialLink: "https://www.pmuy.gov.in/",
      icon: "🔥",
      launchDate: "May 2016",
      targetBeneficiaries: "BPL women",
      budget: "₹8,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-266-6696",
        email: "pmuy@gov.in",
        website: "pmuy.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PMUY_Guide",
    },

    {
      id: 11,
      title: "Atal Pension Yojana",
      category: "employment",
      description: "Pension scheme for unorganized sector workers",
      shortDescription: "Guaranteed pension after 60 years",
      detailedDescription:
        "APY provides a guaranteed monthly pension between ₹1,000 and ₹5,000 after the age of 60 to subscribers.",
      eligibility: "Workers in unorganized sector",
      detailedEligibility: [
        "Age between 18-40 years",
        "Indian citizen",
        "Bank account holder",
      ],
      benefits: "Monthly pension",
      detailedBenefits: [
        "Guaranteed pension",
        "Government co-contribution",
        "Fixed pension amount",
      ],
      howToApply: [
        "Visit bank branch",
        "Fill APY form",
        "Choose pension amount",
      ],
      documents: ["Aadhaar card", "Bank account details", "Mobile number"],
      officialLink: "https://www.npscra.nsdl.co.in/",
      icon: "👴",
      launchDate: "June 2015",
      targetBeneficiaries: "Unorganized workers",
      budget: "₹1,000+ crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-222-080",
        email: "apy@npscra.nsdl.co.in",
        website: "npscra.nsdl.co.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=APY_Registration",
    },
    {
      id: 12,
      title: "Sukanya Samriddhi Yojana",
      category: "women",
      description: "Savings scheme for girl child education and marriage",
      shortDescription: "High-interest savings for girl child",
      detailedDescription:
        "SSY is a government-backed savings scheme offering high interest for the future education and marriage of girl children.",
      eligibility: "Girl child below 10 years",
      detailedEligibility: [
        "Girl child below 10 years",
        "Indian citizen",
        "Maximum two accounts per family",
      ],
      benefits: "High interest savings",
      detailedBenefits: [
        "High interest rate",
        "Tax benefits under 80C",
        "Long-term savings",
      ],
      howToApply: [
        "Visit post office or bank",
        "Fill SSY form",
        "Submit documents",
      ],
      documents: ["Birth certificate", "Aadhaar card", "Address proof"],
      officialLink:
        "https://www.india.gov.in/spotlight/sukanya-samriddhi-yojana",
      icon: "🎀",
      launchDate: "January 2015",
      targetBeneficiaries: "Girl children",
      budget: "Government backed",
      status: "Active",
      contactInfo: {
        tollFree: "1800-266-6868",
        email: "support@indiapost.gov.in",
        website: "indiapost.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=SukanyaSamriddhi_Guide",
    },
    {
      id: 13,
      title: "Digital India Programme",
      category: "youth",
      description: "Transform India into a digitally empowered society",
      shortDescription: "Digital services and online governance",
      detailedDescription:
        "Digital India aims to ensure government services are available electronically and digitally empower citizens.",
      eligibility: "All Indian citizens",
      detailedEligibility: ["Indian citizen", "Access to mobile or internet"],
      benefits: "Digital access to services",
      detailedBenefits: [
        "Online government services",
        "Digital literacy",
        "Faster service delivery",
      ],
      howToApply: [
        "Access digital portals",
        "Use CSC services",
        "Register online",
      ],
      documents: ["Aadhaar card", "Mobile number"],
      officialLink: "https://www.digitalindia.gov.in/",
      icon: "💻",
      launchDate: "July 2015",
      targetBeneficiaries: "All citizens",
      budget: "₹1 lakh crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-111-555",
        email: "support@digitalindia.gov.in",
        website: "digitalindia.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=DigitalIndia_Overview",
    },
    {
      id: 14,
      title: "MGNREGA",
      category: "employment",
      description: "Guaranteed wage employment for rural households",
      shortDescription: "100 days of guaranteed employment",
      detailedDescription:
        "MGNREGA guarantees at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.",
      eligibility: "Rural households",
      detailedEligibility: [
        "Adult member of rural household",
        "Willing to do unskilled manual work",
        "Must have job card",
      ],
      benefits: "Wage employment",
      detailedBenefits: [
        "100 days guaranteed work",
        "Direct wage payment to bank account",
        "Unemployment allowance if work not provided",
      ],
      howToApply: [
        "Apply for Job Card at Gram Panchayat",
        "Register for work",
        "Get work assignment",
      ],
      documents: ["Aadhaar card", "Job card", "Bank account details"],
      officialLink: "https://nrega.nic.in/",
      icon: "🛠️",
      launchDate: "2005",
      targetBeneficiaries: "Rural households",
      budget: "₹60,000+ crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "1800-111-707",
        email: "nrega@gov.in",
        website: "nrega.nic.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=MGNREGA_Guide",
    },
    {
      id: 15,
      title: "National Scholarship Portal",
      category: "education",
      description: "One-stop portal for government scholarships",
      shortDescription: "Scholarships for students across India",
      detailedDescription:
        "NSP provides a centralized platform for application and disbursement of scholarships offered by the Central and State Governments.",
      eligibility: "Students from SC/ST/OBC/Minority categories",
      detailedEligibility: [
        "Indian student",
        "Valid educational enrollment",
        "Meets income criteria",
      ],
      benefits: "Financial assistance for education",
      detailedBenefits: [
        "Tuition fee reimbursement",
        "Maintenance allowance",
        "Direct Bank Transfer",
      ],
      howToApply: [
        "Register on NSP portal",
        "Fill scholarship application",
        "Upload documents",
        "Submit and track status",
      ],
      documents: [
        "Aadhaar card",
        "Income certificate",
        "Caste certificate",
        "Bank details",
      ],
      officialLink: "https://scholarships.gov.in/",
      icon: "🎓",
      launchDate: "2015",
      targetBeneficiaries: "Students",
      budget: "₹3,000+ crore",
      status: "Active",
      contactInfo: {
        tollFree: "0120-6619540",
        email: "helpdesk@nsp.gov.in",
        website: "scholarships.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=NSP_Scholarship_Guide",
    },
    {
      id: 16,
      title: "National Social Assistance Programme",
      category: "employment",
      description: "Social security for elderly, widows and disabled",
      shortDescription: "Pension support for vulnerable citizens",
      detailedDescription:
        "NSAP provides financial assistance to elderly persons, widows and persons with disabilities belonging to BPL households.",
      eligibility: "Elderly, widows, disabled persons",
      detailedEligibility: [
        "BPL household",
        "Age 60+ (elderly)",
        "Widows and disabled persons",
      ],
      benefits: "Monthly pension",
      detailedBenefits: [
        "Old age pension",
        "Widow pension",
        "Disability pension",
      ],
      howToApply: [
        "Apply at Gram Panchayat",
        "Submit verification documents",
        "Approval by authorities",
      ],
      documents: ["Aadhaar card", "BPL card", "Age or disability proof"],
      officialLink: "https://nsap.nic.in/",
      icon: "🧓",
      launchDate: "1995",
      targetBeneficiaries: "Vulnerable citizens",
      budget: "₹9,200 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-11-0090",
        email: "nsap@gov.in",
        website: "nsap.nic.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=NSAP_Pension_Guide",
    },
    {
      id: 17,
      title: "Stand-Up India",
      category: "employment",
      description: "Entrepreneurship support for SC/ST and women",
      shortDescription: "Loans for starting businesses",
      detailedDescription:
        "Stand-Up India facilitates bank loans between ₹10 lakh and ₹1 crore to SC/ST and women entrepreneurs.",
      eligibility: "SC/ST and women entrepreneurs",
      detailedEligibility: [
        "SC/ST or woman entrepreneur",
        "Age 18+",
        "First-time business owner",
      ],
      benefits: "Business loan support",
      detailedBenefits: [
        "Loans up to ₹1 crore",
        "Lower interest rates",
        "Handholding support",
      ],
      howToApply: [
        "Visit standupmitra.in",
        "Apply online",
        "Get bank assistance",
      ],
      documents: ["Aadhaar card", "Caste certificate", "Business proposal"],
      officialLink: "https://www.standupmitra.in/",
      icon: "🚀",
      launchDate: "April 2016",
      targetBeneficiaries: "Women & SC/ST entrepreneurs",
      budget: "₹16,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1111",
        email: "support@standupmitra.in",
        website: "standupmitra.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=StandUpIndia_Loan_Guide",
    },
    {
      id: 18,
      title: "Jal Jeevan Mission",
      category: "health",
      description: "Har Ghar Jal – clean drinking water",
      shortDescription: "Tap water connection to every household",
      detailedDescription:
        "Jal Jeevan Mission aims to provide safe and adequate drinking water through individual household tap connections.",
      eligibility: "Rural households",
      detailedEligibility: [
        "Rural households",
        "Priority to water-scarce areas",
      ],
      benefits: "Safe drinking water",
      detailedBenefits: [
        "Tap water connection",
        "Improved health outcomes",
        "Reduced waterborne diseases",
      ],
      howToApply: [
        "Contact Gram Panchayat",
        "Register household",
        "Get tap connection",
      ],
      documents: ["Aadhaar card", "Residence proof"],
      officialLink: "https://jaljeevanmission.gov.in/",
      icon: "🚰",
      launchDate: "August 2019",
      targetBeneficiaries: "Rural households",
      budget: "₹3.6 lakh crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-2468",
        email: "jjm@gov.in",
        website: "jaljeevanmission.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=JalJeevanMission_Guide",
    },
    {
      id: 19,
      title: "PM SVANidhi",
      category: "employment",
      description: "Micro-credit scheme for street vendors",
      shortDescription: "Collateral-free working capital loans",
      detailedDescription:
        "PM SVANidhi provides collateral-free working capital loans to street vendors to restart their businesses post-COVID and promote digital transactions.",
      eligibility: "Street vendors",
      detailedEligibility: [
        "Street vendors operating before March 24, 2020",
        "Must have vending certificate or survey letter",
        "Urban local body verified vendors",
      ],
      benefits: "Working capital loan support",
      detailedBenefits: [
        "Loan up to ₹10,000 initially",
        "Interest subsidy of 7%",
        "Incentives for digital transactions",
      ],
      howToApply: [
        "Apply through PM SVANidhi portal",
        "Submit vendor documents",
        "Get bank approval",
      ],
      documents: [
        "Aadhaar card",
        "Vending certificate",
        "Bank account details",
      ],
      officialLink: "https://pmsvanidhi.mohua.gov.in/",
      icon: "🛒",
      launchDate: "June 2020",
      targetBeneficiaries: "Street vendors",
      budget: "₹5,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-11-1979",
        email: "support@pmsvanidhi.gov.in",
        website: "pmsvanidhi.mohua.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PM_SVANidhi_Guide",
    },
    {
      id: 20,
      title: "Pradhan Mantri Jan Dhan Yojana",
      category: "employment",
      description: "Financial inclusion scheme for banking access",
      shortDescription: "Zero balance bank accounts",
      detailedDescription:
        "PMJDY aims to ensure access to financial services like banking, insurance and pension through basic savings bank accounts.",
      eligibility: "All Indian citizens",
      detailedEligibility: [
        "Indian citizen",
        "Age 10+ years",
        "No existing bank account required",
      ],
      benefits: "Financial inclusion benefits",
      detailedBenefits: [
        "Zero balance account",
        "Accidental insurance cover of ₹2 lakh",
        "Life insurance cover of ₹30,000",
        "Direct Benefit Transfer eligibility",
      ],
      howToApply: [
        "Visit nearest bank branch",
        "Fill Jan Dhan account form",
        "Submit KYC documents",
      ],
      documents: ["Aadhaar card", "PAN card (optional)", "Address proof"],
      officialLink: "https://pmjdy.gov.in/",
      icon: "🏦",
      launchDate: "August 2014",
      targetBeneficiaries: "All citizens",
      budget: "Government funded",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1111",
        email: "pmjdy@gov.in",
        website: "pmjdy.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PMJDY_Account_Open",
    },
    {
      id: 21,
      title: "PM Mudra Yojana",
      category: "employment",
      description: "Loan scheme for micro and small enterprises",
      shortDescription: "Business loans up to ₹10 lakh",
      detailedDescription:
        "Pradhan Mantri Mudra Yojana provides collateral-free loans to micro and small enterprises to promote entrepreneurship and self-employment.",
      eligibility: "Small business owners and entrepreneurs",
      detailedEligibility: [
        "Indian citizen",
        "Non-corporate small business",
        "Manufacturing, trading or service sector",
      ],
      benefits: "Collateral-free business loans",
      detailedBenefits: [
        "Loans up to ₹10 lakh",
        "No collateral required",
        "Low interest rates",
      ],
      howToApply: [
        "Visit bank or NBFC",
        "Submit Mudra loan application",
        "Provide business details",
      ],
      documents: [
        "Aadhaar card",
        "PAN card",
        "Business proof",
        "Bank account details",
      ],
      officialLink: "https://www.mudra.org.in/",
      icon: "💰",
      launchDate: "April 2015",
      targetBeneficiaries: "Small entrepreneurs",
      budget: "₹20,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-180-1111",
        email: "mudra@gov.in",
        website: "mudra.org.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=MudraLoan_Guide",
    },
    {
      id: 22,
      title: "Startup India",
      category: "employment",
      description: "Support ecosystem for startups",
      shortDescription: "Tax benefits & funding support",
      detailedDescription:
        "Startup India promotes innovation and entrepreneurship through tax benefits, funding support and ease of doing business.",
      eligibility: "Recognized startups",
      detailedEligibility: [
        "Startup recognized by DPIIT",
        "Company less than 10 years old",
        "Annual turnover below ₹100 crore",
      ],
      benefits: "Funding and tax benefits",
      detailedBenefits: [
        "Tax exemption for 3 years",
        "Access to funding",
        "Startup mentorship",
      ],
      howToApply: [
        "Register on startupindia.gov.in",
        "Get DPIIT recognition",
        "Apply for benefits",
      ],
      documents: ["Incorporation certificate", "PAN card", "Business pitch"],
      officialLink: "https://www.startupindia.gov.in/",
      icon: "🚀",
      launchDate: "January 2016",
      targetBeneficiaries: "Startups",
      budget: "₹10,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "1800-115-565",
        email: "support@startupindia.gov.in",
        website: "startupindia.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=StartupIndia_Guide",
    },
    {
      id: 23,
      title: "Make in India",
      category: "employment",
      description: "Boost manufacturing in India",
      shortDescription: "Encourages domestic manufacturing",
      detailedDescription:
        "Make in India aims to transform India into a global manufacturing hub by encouraging companies to manufacture locally.",
      eligibility: "Industries and investors",
      detailedEligibility: [
        "Indian and foreign investors",
        "Manufacturing sector",
      ],
      benefits: "Ease of doing business",
      detailedBenefits: [
        "Policy support",
        "FDI facilitation",
        "Infrastructure development",
      ],
      howToApply: [
        "Register on Make in India portal",
        "Apply for sector-specific incentives",
      ],
      documents: ["Company registration", "Business plan"],
      officialLink: "https://www.makeinindia.com/",
      icon: "🏭",
      launchDate: "September 2014",
      targetBeneficiaries: "Manufacturers",
      budget: "Policy driven",
      status: "Active",
      contactInfo: {
        tollFree: "1800-11-4567",
        email: "makeinindia@gov.in",
        website: "makeinindia.com",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=MakeInIndia_Overview",
    },
    {
      id: 24,
      title: "PM Garib Kalyan Anna Yojana",
      category: "health",
      description: "Free food grains for poor families",
      shortDescription: "Free ration support",
      detailedDescription:
        "PMGKAY provides free food grains to beneficiaries under NFSA to ensure food security.",
      eligibility: "NFSA beneficiaries",
      detailedEligibility: ["Ration card holders", "NFSA registered families"],
      benefits: "Free food grains",
      detailedBenefits: ["Free wheat and rice", "Improved food security"],
      howToApply: ["Visit fair price shop", "Verify ration card"],
      documents: ["Ration card", "Aadhaar card"],
      officialLink: "https://dfpd.gov.in/",
      icon: "🍚",
      launchDate: "March 2020",
      targetBeneficiaries: "Poor households",
      budget: "₹3.9 lakh crore",
      status: "Active",
      contactInfo: {
        tollFree: "1967",
        email: "dfpd@gov.in",
        website: "dfpd.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PMGKAY_Guide",
    },
    {
      id: 25,
      title: "One Nation One Ration Card",
      category: "health",
      description: "Portability of ration benefits",
      shortDescription: "Use ration card anywhere in India",
      detailedDescription:
        "ONORC allows beneficiaries to access subsidized food grains from any fair price shop across India.",
      eligibility: "Ration card holders",
      detailedEligibility: ["NFSA beneficiaries", "Aadhaar linked ration card"],
      benefits: "Nationwide food access",
      detailedBenefits: ["Portability of ration", "Supports migrant workers"],
      howToApply: ["Link Aadhaar with ration card", "Use FPS anywhere"],
      documents: ["Ration card", "Aadhaar card"],
      officialLink: "https://www.onesc.gov.in/",
      icon: "🧾",
      launchDate: "2019",
      targetBeneficiaries: "Ration card holders",
      budget: "Government funded",
      status: "Active",
      contactInfo: {
        tollFree: "1967",
        email: "onorc@gov.in",
        website: "onesc.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=ONORC_Guide",
    },
    {
      id: 26,
      title: "National Scholarship Portal (NSP)",
      category: "education",
      description: "Centralized portal for multiple government scholarships",
      shortDescription: "One portal for central & state scholarships",
      detailedDescription:
        "National Scholarship Portal is a digital platform that provides information and application access to various scholarships offered by central and state governments.",
      eligibility: "Students from SC/ST/OBC/Minority/EWS categories",
      detailedEligibility: [
        "Indian citizen",
        "Students from Class 1 to PhD",
        "Family income as per scheme norms",
        "Valid Aadhaar-linked bank account",
      ],
      benefits: "Direct scholarship transfer to bank account",
      detailedBenefits: [
        "Covers pre-matric, post-matric & merit scholarships",
        "Direct Benefit Transfer (DBT)",
        "Multiple schemes on one platform",
        "Transparent tracking system",
      ],
      howToApply: [
        "Visit https://scholarships.gov.in",
        "Register as a new student",
        "Fill application form",
        "Upload documents",
        "Submit and track status",
      ],
      documents: [
        "Aadhaar card",
        "Income certificate",
        "Caste certificate",
        "Bank passbook",
        "Educational certificates",
      ],
      officialLink: "https://scholarships.gov.in",
      icon: "🎓",
      launchDate: "2015",
      targetBeneficiaries: "Students across India",
      budget: "₹2,800 crore annually",
      status: "Active",
      contactInfo: {
        tollFree: "0120-6619540",
        email: "helpdesk@nsp.gov.in",
        website: "scholarships.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=NSP_Scholarship_Guide",
    },
    {
      id: 27,
      title: "Post Matric Scholarship for SC Students",
      category: "education",
      description: "Financial support for SC students after Class 10",
      shortDescription: "Scholarship for SC students pursuing higher education",
      detailedDescription:
        "This scheme supports Scheduled Caste students in post-matric education to reduce dropout rates and encourage higher studies.",
      eligibility: "SC students studying after Class 10",
      detailedEligibility: [
        "Must belong to SC category",
        "Family income below ₹2.5 lakh",
        "Enrolled in recognized institution",
      ],
      benefits: "Tuition fees and maintenance allowance",
      detailedBenefits: [
        "Full tuition fee coverage",
        "Monthly maintenance allowance",
        "Book & study material allowance",
      ],
      howToApply: [
        "Apply through NSP portal",
        "Fill scholarship form",
        "Upload caste & income certificate",
        "Submit application",
      ],
      documents: [
        "Caste certificate",
        "Income certificate",
        "Aadhaar card",
        "College ID",
        "Bank account details",
      ],
      officialLink: "https://scholarships.gov.in",
      icon: "📘",
      launchDate: "1944",
      targetBeneficiaries: "SC students",
      budget: "₹6,000 crore",
      status: "Active",
      contactInfo: {
        tollFree: "0120-6619540",
        email: "helpdesk@nsp.gov.in",
        website: "scholarships.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=PostMatric_SC_Scholarship",
    },
    {
      id: 28,
      title: "Merit-cum-Means Scholarship",
      category: "education",
      description: "Scholarship for minority students based on merit & income",
      shortDescription: "Financial aid for minority students",
      detailedDescription:
        "This scholarship supports minority students pursuing professional and technical courses.",
      eligibility: "Minority students with merit",
      detailedEligibility: [
        "Belong to minority community",
        "Minimum 50% marks",
        "Family income below ₹2.5 lakh",
      ],
      benefits: "Course fee & maintenance allowance",
      detailedBenefits: [
        "Up to ₹20,000 course fee",
        "Monthly stipend",
        "Direct bank transfer",
      ],
      howToApply: [
        "Apply via NSP",
        "Upload academic records",
        "Submit income proof",
      ],
      documents: [
        "Minority certificate",
        "Income certificate",
        "Academic mark sheets",
        "Bank passbook",
      ],
      officialLink: "https://scholarships.gov.in",
      icon: "🏅",
      launchDate: "2007",
      targetBeneficiaries: "Minority students",
      budget: "₹1,200 crore",
      status: "Active",
      contactInfo: {
        tollFree: "0120-6619540",
        email: "helpdesk@nsp.gov.in",
        website: "scholarships.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=MeritCumMeans_Scholarship",
    },
    {
      id: 29,
      title: "INSPIRE Scholarship",
      category: "education",
      description: "Scholarship for students pursuing science education",
      shortDescription: "Promotes science education among youth",
      detailedDescription:
        "INSPIRE scholarship encourages talented students to pursue science courses after Class 12.",
      eligibility: "Top-performing science students",
      detailedEligibility: [
        "Top 1% students in Class 12",
        "Studying natural sciences",
        "Age group 17–22 years",
      ],
      benefits: "₹80,000 per year",
      detailedBenefits: [
        "Annual scholarship of ₹80,000",
        "Support for research & education",
      ],
      howToApply: [
        "Apply on Inspire portal",
        "Upload academic proof",
        "Submit application",
      ],
      documents: ["Class 12 mark sheet", "Aadhaar card", "Bank details"],
      officialLink: "https://online-inspire.gov.in",
      icon: "🔬",
      launchDate: "2008",
      targetBeneficiaries: "Science students",
      budget: "₹500 crore",
      status: "Active",
      contactInfo: {
        tollFree: "011-26567373",
        email: "inspire-dst@gov.in",
        website: "online-inspire.gov.in",
      },
      youtubeVideo: "https://www.youtube.com/watch?v=INSPIRE_Scholarship_Guide",
    },
  ];

  const categories = [
    { id: "all", label: "All Schemes", icon: "📋" },
    { id: "agriculture", label: t("agriculture"), icon: "🌾" },
    { id: "education", label: t("education"), icon: "📚" },
    { id: "health", label: t("health"), icon: "🏥" },
    { id: "employment", label: t("employment"), icon: "💼" },
    { id: "housing", label: t("housing"), icon: "🏠" },
    { id: "women", label: t("women"), icon: "👩" },
    { id: "youth", label: t("youth"), icon: "🎯" },
  ];

  useEffect(() => {
    filterSchemes();
  }, [searchTerm, selectedCategory, currentLanguage]);

  const filterSchemes = () => {
    let filtered = schemesData;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (scheme) => scheme.category === selectedCategory,
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (scheme) =>
          scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          scheme.shortDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredSchemes(filtered);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLearnMore = (scheme) => {
    navigate(`/scheme/${scheme.id}`, { state: { scheme } });
  };

  return (
    <div className="schemes">
      <div className="schemes-hero">
        <div className="container">
          <h1 className="schemes-title">Government Schemes</h1>
          <p className="schemes-subtitle">
            Discover comprehensive information about various government schemes
            designed to benefit citizens across India
          </p>
        </div>
      </div>

      <div className="schemes-content">
        <div className="container">
          {/* Search and Filter Section */}
          <div className="search-filter-section">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder={
                  t("searchSchemes") ||
                  "Search schemes by name, description, or category..."
                }
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>

            <div className="filter-section">
              <Filter size={20} className="filter-icon" />
              <span className="filter-label">Categories:</span>
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-filter ${selectedCategory === category.id ? "active" : ""}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-label">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="schemes-grid">
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme) => (
                <div key={scheme.id} className="scheme-card fade-in">
                  <div className="scheme-header">
                    <div className="scheme-icon">{scheme.icon}</div>
                    <div className="scheme-category">
                      {
                        categories.find((cat) => cat.id === scheme.category)
                          ?.label
                      }
                    </div>
                  </div>

                  <h3 className="scheme-title">{scheme.title}</h3>
                  <p className="scheme-description">
                    {scheme.shortDescription}
                  </p>

                  <div className="scheme-details">
                    <div className="scheme-detail">
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </div>
                    <div className="scheme-detail">
                      <strong>Benefits:</strong> {scheme.benefits}
                    </div>
                    <div className="scheme-detail">
                      <strong>Launch:</strong> {scheme.launchDate}
                    </div>
                    <div className="scheme-detail">
                      <strong>Budget:</strong> {scheme.budget}
                    </div>
                  </div>

                  <div className="scheme-actions">
                    <a
                      href={scheme.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="official-link"
                    >
                      Official Portal
                      <ExternalLink size={16} />
                    </a>
                    {scheme.youtubeVideo && (
                      <a
                        href={scheme.youtubeVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                      >
                        Watch Tutorial
                        <Play size={16} />
                      </a>
                    )}
                    <button
                      className="learn-more-btn"
                      onClick={() => handleLearnMore(scheme)}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No schemes found</h3>
                <p>Try adjusting your search criteria or category filter</p>
              </div>
            )}
          </div>

          {/* Results Count */}
          {filteredSchemes.length > 0 && (
            <div className="results-count">
              Showing {filteredSchemes.length} of {schemesData.length} schemes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
