window.onload = function() {
  document.getElementById('toggleDIV').style.display = 'none';
  document.getElementById('toggleDIV2').style.display = 'none';
  document.getElementById('toggleDIV3').style.display = 'none';
  document.getElementById('toggleDIV4').style.display = 'none';
};

var cust_DB=[
    {
     "Name": "PSRK",
     "Code": 9176655120,
     "Area": "BCM"
    },
    {
     "Name": "UMA",
     "Code": 8500315929,
     "Area": "BNG"
    },
    {
     "Name": "NAGENDRAN",
     "Code": 6281144622,
     "Area": "SPL"
    },
    {
     "Name": "Developer",
     "Code": 123,
     "Area": "xyz"
    },
 ]

var agent_DB=[
 {
   "FIELD1": "KSRK",
   "FIELD2": 1234
 },
 {
   "FIELD1": "PSRK",
   "FIELD2": 2045
 },
 {
   "FIELD1": "NANI",
   "FIELD2": 5715
 },
 {
   "FIELD1": "UMA",
   "FIELD2": 4444
 }
]

var transaction_DB=[
    {
    "Coll Point": "NTR",
    "Rec No": 100,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "xyz"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 101,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "xyz"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 102,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "xyz"
  },
    
    
  {
    "Coll Point": "NTR",
    "Rec No": 9578,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9193,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 414,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1741,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1203,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1733,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8787,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9194,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 697,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9869,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9579,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 698,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2807,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 69,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8724,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7873,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18112,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7788,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9195,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 9598,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "CH TRIVENI",
    "Rec No": 8230,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18113,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2306,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1828,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18217,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18218,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18048,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18049,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18050,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18051,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18052,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18053,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18054,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18055,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18219,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18220,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7858,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2518,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18221,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9870,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18222,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1204,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 9697,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9354,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 267,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9355,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18223,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 9698,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18114,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9581,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3686,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 601,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2277,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2278,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1735,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16185,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1736,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 719,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1205,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9752,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7874,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 19,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9356,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 20,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 21,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 203,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18056,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8874,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9959,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9960,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4756,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2519,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4757,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7789,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 24,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 71,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 70,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7790,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43657,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 600,
    "Location": "BNG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8725,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46114,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46115,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2348,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 602,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7428,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 160,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46116,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2279,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3125,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2808,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9840,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 23,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 959,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9841,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18057,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3126,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18115,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1923,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9582,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2350,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18058,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 720,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18116,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 22,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9583,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7859,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 699,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4660,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 25,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2280,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46324,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18117,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 10,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 26,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 603,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 263,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2351,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2352,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2520,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9961,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2349,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 840,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3687,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7860,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 27,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1795,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7861,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1924,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1374,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 28,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18224,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18118,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3127,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7791,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7792,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 604,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1375,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 185,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 29,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9196,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2281,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 30,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 153,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16187,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 700,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9753,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9264,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1091,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1737,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 605,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1092,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16188,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18059,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16189,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 227,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18060,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 190,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2070,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9754,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6245,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7427,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7875,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1376,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8875,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2282,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7876,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7888,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9871,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2283,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1377,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1378,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9872,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9198,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9197,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16190,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9199,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8726,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8727,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6246,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3688,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9265,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7889,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4961,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6247,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4962,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 607,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 608,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 609,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9357,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16192,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1829,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1379,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9358,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9359,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 255,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8505,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46117,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9755,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 31,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8506,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7877,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46118,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1380,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8507,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1796,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9360,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46119,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16193,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16194,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18119,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1925,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16195,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18061,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 4882,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16196,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1207,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18225,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1208,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16197,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 210,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1209,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 32,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 170,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4682,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1381,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9584,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1382,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9361,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9873,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7862,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18226,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16191,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7429,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16198,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1090,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16199,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16200,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1797,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 610,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9962,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7863,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 126,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9585,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1575,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 130,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1563,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1576,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3689,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1830,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18401,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3001,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2126,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 131,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 33,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1383,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18120,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 210,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2522,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9756,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 960,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2353,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9435,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2354,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2356,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9586,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3002,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46325,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46326,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2357,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1915,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7793,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1354,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 611,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9874,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 1897,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1093,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1094,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1095,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1831,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1096,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9875,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 9796,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 72,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 73,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9266,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2071,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43658,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3003,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8728,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1731,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7878,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 74,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 34,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 35,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 36,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 37,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 38,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2523,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2524,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 39,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2072,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2285,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2521,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2286,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18121,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18062,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18122,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1364,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2284,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18063,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1210,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 1700,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1385,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7795,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46120,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1798,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 40,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2073,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18123,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1211,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1212,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1213,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1214,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1215,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1216,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1217,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1577,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9876,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1578,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 285,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18227,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1879,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1580,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2287,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7890,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 252,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1581,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7879,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43659,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9877,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2131,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2701,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "CH TRIVENI",
    "Rec No": 8232,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1386,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "CH TRIVENI",
    "Rec No": 8234,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18228,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9587,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "CH TRIVENI",
    "Rec No": 8231,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18229,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9757,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7925,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 17230,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 9200,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 41,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3006,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18402,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43104,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18124,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18231,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18403,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18125,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2809,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1218,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 42,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5580,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2525,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8729,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2355,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1097,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2526,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2810,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7430,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8074,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9758,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9588,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18405,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9589,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7553,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18126,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9267,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18232,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7554,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1387,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18406,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9268,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9269,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 43,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18233,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2702,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18127,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1098,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 44,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1219,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2527,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 45,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18234,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 612,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 252,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1926,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1582,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7891,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7884,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3691,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7796,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18128,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18129,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4748,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18130,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 16186,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1916,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3690,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9878,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9879,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1917,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46122,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9590,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1388,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18235,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1099,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18236,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 207,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4963,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4964,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43660,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18064,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18066,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9591,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9270,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2528,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18065,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 420,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 606,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 9699,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18067,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9365,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 9700,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1918,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7880,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 231,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3128,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18237,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9366,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7555,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1389,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18131,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2358,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4965,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1390,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1583,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1391,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7791,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46121,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 1899,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 1898,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18303,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 16600,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18304,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 615,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 333,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46117,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 614,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4683,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9271,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1220,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1919,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9362,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9363,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9364,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1738,
    "Bill Date": "01-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9881,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1739,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 504,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9367,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9592,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7892,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9882,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1740,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7431,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9759,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7864,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1355,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3692,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18305,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1356,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 613,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9883,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3004,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7893,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3005,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7791,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1221,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 182,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1222,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1223,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 650,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 616,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1224,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1741,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1225,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1226,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8730,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1227,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1228,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1742,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1229,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1230,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9368,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1743,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18238,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7881,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1233,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1232,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1231,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1234,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18068,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2811,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18069,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18070,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18071,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7798,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2812,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2813,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2814,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9369,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18072,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 420,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18073,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18074,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18075,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18076,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 178,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18077,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18078,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2242,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18079,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18239,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18240,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18241,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 617,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18242,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7799,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1744,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 46,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 47,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 48,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1920,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3007,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7882,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 49,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 50,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9437,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9438,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9439,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2704,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1732,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1585,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7883,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1586,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1745,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7556,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1089,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 1,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7557,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7884,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7558,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2529,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18243,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2530,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18244,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2531,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18245,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 618,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3693,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18246,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18247,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18248,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18080,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 2,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2074,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9272,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18081,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46123,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2532,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18082,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2533,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18249,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2534,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9273,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2075,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4759,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2705,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2360,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 332,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9274,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7865,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 9600,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2535,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 217,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9843,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9842,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1357,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 1100,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1587,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18126,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18250,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2601,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 240,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1392,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1393,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18084,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1394,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9275,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2602,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 132,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 245,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9276,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1746,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1395,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2289,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7885,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18083,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43663,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3008,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18127,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 961,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 227,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 51,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2603,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45747,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 54,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1235,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43662,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18251,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2076,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43661,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 962,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2077,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 415,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43664,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 416,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2078,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43105,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8788,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43106,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46327,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 909,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7886,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18407,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 350,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7559,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46124,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 619,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 177,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18128,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18408,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2536,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2290,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18306,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9277,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18409,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8731,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1921,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 9599,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 3,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18410,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 196,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18411,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18129,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 963,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 620,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9884,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 7800,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7432,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7433,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2538,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7560,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18412,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1927,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9760,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3129,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2539,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8732,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 964,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1928,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7887,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7888,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2079,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2540,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2291,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18413,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7561,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46125,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8733,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18414,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2703,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1236,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8401,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 2148,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1368,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18415,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5581,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9278,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3009,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 500,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1832,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9279,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18416,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1589,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2292,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 900,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 621,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2541,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2293,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18130,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1588,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3694,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2294,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 965,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3695,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7889,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3010,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9761,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2604,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2295,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2296,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9280,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2605,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 53,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 52,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 55,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 56,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1590,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 57,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 2225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 58,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 59,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 60,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3696,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9595,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9372,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2297,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2298,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2299,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9441,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9880,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9885,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 601,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9886,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 410,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2080,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2359,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7562,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 61,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9440,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 232,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7563,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1396,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7890,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5582,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1358,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 622,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2307,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 62,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 63,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3130,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46126,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9370,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2361,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 602,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2362,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9371,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2363,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2364,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9373,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 623,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 225,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2365,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9374,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2366,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 75,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18131,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43665,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8873,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2542,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8876,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8872,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18132,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1591,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9597,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 966,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2606,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 390,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3011,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3012,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1929,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46127,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43666,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2244,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7564,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7565,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 64,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1922,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2081,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 624,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2543,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8508,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8075,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8509,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7434,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8734,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 3452,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2300,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 240,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9375,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18417,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18418,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18252,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8735,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7895,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 65,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 1000,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18419,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2544,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2545,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18420,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9888,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 66,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 380,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1930,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18421,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18422,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18253,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18423,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7566,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9376,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9377,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 67,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18307,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 17254,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 1331058024,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2815,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18424,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18255,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9378,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18256,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 134,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2245,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18425,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1397,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2368,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18085,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2370,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9762,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18086,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2537,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1398,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1923,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18087,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1833,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2546,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18088,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18089,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 5,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 4,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18426,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1924,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7896,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18091,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18132,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18427,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18257,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 205,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9379,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 625,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18428,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1925,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2082,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7866,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3013,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7891,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2406,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3014,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18429,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 626,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 69,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 440,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7926,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 70,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 265,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 71,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 330,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18258,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9281,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 73,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 74,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43667,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 604,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 75,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 76,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18090,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18430,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18259,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1399,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1400,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 45,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2608,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2407,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1401,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9889,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18431,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 1900,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18432,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5903,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18260,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1403,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4684,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7435,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8510,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18092,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18093,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 77,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 235,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7892,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9599,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9436,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 470,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7897,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9442,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9963,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4966,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 721,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18094,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 177,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2243,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1405,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8877,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2246,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18095,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18433,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45748,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2127,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2128,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2129,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2130,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 270,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18434,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18435,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2131,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18133,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 627,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1834,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18436,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1799,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2369,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 1800,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18134,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4422,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8737,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46128,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 601,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 440,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1406,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 76,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9600,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8738,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 235,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Khambampadu",
    "Rec No": "",
    "Bill Date": "02-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 968,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8739,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3015,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2706,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 77,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9380,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 1800,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46129,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4760,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46130,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3698,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8402,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8403,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2401,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9763,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1747,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1748,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1749,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2707,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3699,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9891,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43668,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8878,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2132,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9764,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9765,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8740,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9766,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1238,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1239,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1240,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2548,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2549,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7436,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1241,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1242,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 187,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7567,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46328,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18097,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1750,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18096,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2708,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18098,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18099,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8789,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1751,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18100,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18501,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18502,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18503,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18504,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18505,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18261,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1752,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18134,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 628,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2550,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 470,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18262,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18308,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 78,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18309,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 79,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18263,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9965,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7927,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7928,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7929,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2816,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7930,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1407,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7931,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9282,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1408,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7932,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1409,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1410,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 185,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9381,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9892,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1411,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1412,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 80,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9283,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2373,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2375,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18135,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2408,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17958,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 417,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9844,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17959,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8741,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2376,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 650,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2377,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46131,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17960,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43107,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4967,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4968,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17961,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 1901,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 350,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4969,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18136,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4970,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 418,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4971,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18264,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2817,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2709,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2710,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2711,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2083,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18265,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3016,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18266,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18267,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3017,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 606,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9767,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 419,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18268,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1413,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2409,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9845,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18269,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1926,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9443,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1243,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17962,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8879,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 244,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18270,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 607,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2551,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7867,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 390,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1244,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2367,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3018,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9763,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5904,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2378,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9284,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17963,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18271,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18272,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17964,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8742,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 79,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 400,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 81,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18137,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7893,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "BCM"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1753,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18138,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1402,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 84,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 337,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17965,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7568,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9382,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 83,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 722,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18139,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 967,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 456,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1754,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8880,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3019,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8744,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 969,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 46234,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8743,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2818,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18310,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2605,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17966,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 315,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1414,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17967,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 85,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 86,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 87,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 88,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18506,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18507,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 205,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18508,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18509,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9846,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2084,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2085,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2086,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2087,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18510,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9887,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7437,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17969,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18140,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2552,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17970,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2088,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7894,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8736,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2089,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2819,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 89,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 90,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18141,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 78,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 82,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7898,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18273,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 81,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 82,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1415,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1584,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8745,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 629,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9964,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 91,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9285,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2090,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9286,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9893,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2092,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9894,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1245,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1836,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43669,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7438,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2410,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 6,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2411,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 276,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1416,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1359,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45749,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2091,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 608,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7569,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2553,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 320,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2412,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9769,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1835,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 630,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 631,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1592,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2413,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1246,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2095,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18143,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1594,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1755,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1927,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2712,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2093,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2094,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2096,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2374,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1360,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2379,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 900,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 609,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2402,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1756,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1595,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 632,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9770,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1596,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 633,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2099,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9890,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9287,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9895,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1597,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9288,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2555,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2554,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18274,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1417,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2097,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43670,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 92,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1418,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 185,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 93,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18275,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 94,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 95,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 96,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7895,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 610,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18512,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7896,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18513,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18511,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2820,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2403,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9771,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17971,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7897,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18142,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18276,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1593,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8881,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 97,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2556,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17972,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18277,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7934,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2100,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2901,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18278,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17973,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6248,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18279,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18514,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7868,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 98,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18515,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18280,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1931,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4661,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17974,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2371,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7898,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7570,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17957,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2381,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18144,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1419,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2380,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2414,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 154,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9772,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1420,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 605,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9773,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18281,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8791,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18145,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 723,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1421,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18282,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 83,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 177,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46329,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9896,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18516,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 154,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 970,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2098,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1599,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8076,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9384,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9596,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 190,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4685,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1361,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1422,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17976,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9897,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 634,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7935,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7936,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 971,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7937,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7938,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9385,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7571,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 611,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2415,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2416,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2417,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8882,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18517,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1362,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18146,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2383,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2384,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18518,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2418,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1247,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17968,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2404,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2610,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 135,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2133,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4973,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18147,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4972,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18148,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2902,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9444,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9898,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1593,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4974,
    "Bill Date": "03-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2405,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9386,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2406,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2407,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 370,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4762,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4761,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8910,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7573,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2408,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1837,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2713,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1363,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 612,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8746,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2409,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2132,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2133,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1753,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2611,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1248,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1249,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1250,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2134,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18519,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18520,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18521,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2308,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9387,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9388,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18522,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18524,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18525,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7894,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18526,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1364,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1928,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18143,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2134,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18283,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8747,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1365,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18527,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1251,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18528,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2557,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18529,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1252,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3020,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18144,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18284,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8748,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3021,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 99,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 100,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2411,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2419,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17977,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9389,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9847,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9390,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9848,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18285,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18286,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7899,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7439,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9774,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1366,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 420,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2558,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8792,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9593,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 101,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8077,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9289,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 102,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17978,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 103,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18437,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2412,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 104,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 136,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8794,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 613,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8793,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7574,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18287,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 614,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 105,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2372,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 106,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 107,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2385,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 255,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18288,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 972,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1253,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2559,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 108,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 220,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 7,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2560,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 8,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18145,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 25,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 109,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18289,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18530,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2386,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 220,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 110,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8511,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 700,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1424,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9383,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17979,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 1600,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2561,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2562,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 111,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 235,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18311,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 112,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4975,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 113,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 335,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3022,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 64,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3023,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9290,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17980,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 263,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 635,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18312,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43671,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2612,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8749,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1254,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2613,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 114,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18313,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 115,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1425,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18290,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 42108,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2614,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1760,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2420,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43109,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2387,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4976,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 116,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1426,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 117,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 860,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7899,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 9446,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46330,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46331,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2821,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2615,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18291,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 215,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18292,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2413,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46132,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8883,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9291,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 315,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8884,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 225,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9899,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18523,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18293,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 8203,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2903,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2802,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 118,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1256,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1257,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1258,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2414,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 615,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46133,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 636,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1427,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 637,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 225,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1423,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1259,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2563,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7900,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 901,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 119,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18143,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 638,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 120,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1929,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17981,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 183,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17982,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17983,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 902,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2714,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8750,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2822,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3025,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 9900,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9292,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3026,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 639,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2382,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2904,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17984,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43110,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3131,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9598,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46134,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 121,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2906,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8790,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45751,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9594,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1367,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 122,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 421,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2415,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2907,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 973,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2905,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 504,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7440,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2135,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7441,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2136,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2564,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2247,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 640,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 123,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2137,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1761,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 641,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9447,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1762,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8751,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 8512,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8513,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45752,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 124,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2823,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3027,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2565,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 7900,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4201,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2416,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3601,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2908,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3602,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 125,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2909,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2910,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3028,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 642,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2422,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2911,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8885,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9775,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8886,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1763,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 133,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3029,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3603,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2417,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 903,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 616,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1930,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2388,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4202,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2418,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7575,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3604,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3605,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1428,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2824,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 422,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2607,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45753,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7442,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3606,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1764,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46332,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46333,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46334,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4977,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45750,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 904,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 905,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 643,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9391,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3201,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3202,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3203,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9448,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9449,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 3697,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3204,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3205,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3206,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2419,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18144,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 129,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1932,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18145,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 126,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 906,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 127,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 128,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8079,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1933,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 160,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43111,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 423,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3607,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3608,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2423,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2616,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18294,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2424,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2501,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 85,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2502,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 0,
    "Bill Date": "02-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18295,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2617,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3609,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1429,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 350,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18296,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4686,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3610,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18297,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2420,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18298,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2804,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18531,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18532,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18533,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17985,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7576,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8752,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 619,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18299,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2410,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8078,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1431,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3207,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8887,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7443,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1934,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 974,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18300,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 235,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2391,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2392,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 424,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 975,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8512,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17986,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1430,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 275,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17987,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3030,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2803,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2805,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7577,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46135,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18438,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 218,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3611,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7444,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18439,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2825,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 617,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 618,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2503,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 425,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17988,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9450,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2426,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2427,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 155,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8405,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4203,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9393,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2567,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17989,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 262,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 907,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2428,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2716,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 217,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1261,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2715,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 976,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 977,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2568,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 130,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 131,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 212,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2569,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2421,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2504,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 134,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2394,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2801,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2395,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2396,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2389,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2826,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2390,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1432,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18440,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8753,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1262,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2429,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8754,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2570,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1368,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1433,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1434,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2806,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7939,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2807,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2571,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46240,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1766,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9849,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2421,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2618,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18601,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2619,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9451,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9394,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 132,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 133,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 242,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 135,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 136,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 137,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18534,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9395,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8755,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18535,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2430,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 2901,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2572,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 137,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2309,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18145,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3031,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3033,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1935,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 260,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2573,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2574,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2393,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 1800,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2397,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2398,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1435,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9396,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9850,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 325,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2422,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9397,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1436,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 2902,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2620,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2424,
    "Bill Date": "04-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7869,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7870,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2717,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2425,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2426,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1767,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2718,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2827,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9392,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1369,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 138,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3408,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9398,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2427,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3613,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9776,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1936,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 86,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9293,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8756,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 141,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18602,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 139,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18537,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18536,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4763,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18538,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4764,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 142,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9851,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43672,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18603,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18604,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9777,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 320,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2621,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9778,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1768,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2622,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18605,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9399,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9779,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17990,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3034,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3035,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 620,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2135,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1263,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 262,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18606,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1264,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 500,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1260,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8405,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 724,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 143,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2423,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18607,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7445,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7578,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17991,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8407,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17992,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 908,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3614,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18608,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2431,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2912,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2575,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 144,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18539,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1767,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18540,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3409,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18541,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18609,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1937,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9294,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18146,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 147,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2432,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 145,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 146,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9295,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2808,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 621,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2809,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18610,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2719,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 909,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18311,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18312,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2913,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46136,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2433,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17993,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46138,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 220,
    "Location": "BNG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2505,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18611,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2623,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2506,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2624,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2399,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2828,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 148,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 149,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 350,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4765,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 9400,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2400,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1938,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7579,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1437,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1438,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1439,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1440,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2813,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1441,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2812,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18542,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1442,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18543,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2434,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 650,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2811,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2914,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1443,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46137,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18612,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7580,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2428,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2625,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 456,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2829,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18544,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 177,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18147,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1265,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 245,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2814,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18148,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2720,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2815,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 330,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2248,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 140,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 150,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46335,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2429,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46336,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8408,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43673,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18545,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2816,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1757,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1759,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7871,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3612,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2817,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2915,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 412,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 3458,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3410,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18313,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18314,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2435,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 910,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1940,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 978,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2903,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18315,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17994,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2818,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17995,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9571,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2436,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18316,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 151,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 152,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 153,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 154,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 155,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 156,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2707,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1445,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1371,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1372,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2916,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2430,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2810,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 979,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2626,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43112,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2627,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9966,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43674,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43675,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 911,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1939,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2437,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2438,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1941,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2576,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2628,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 623,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1373,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8514,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43676,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 912,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9781,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5583,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9780,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2440,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2138,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1931,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1932,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2431,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7581,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7582,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7583,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2819,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3615,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2629,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2904,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18149,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18150,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2310,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1942,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17996,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17997,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1838,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 235,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2708,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17999,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2441,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18151,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 40,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18000,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2439,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18152,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18613,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18614,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8080,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7584,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18701,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18153,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18615,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18702,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 157,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18703,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2136,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2917,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9782,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18704,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18616,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18705,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2630,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1839,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43677,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18154,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18706,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7940,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9445,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 301,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3036,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18617,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 913,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18546,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18547,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18548,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18707,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18549,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2442,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18550,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18551,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43678,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2918,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8409,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1444,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18618,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46139,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1446,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18708,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2139,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18155,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46140,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1447,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18156,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2830,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18619,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9783,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2311,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 158,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 159,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18620,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18552,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4978,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18621,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8757,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2443,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9296,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43679,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3616,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1370,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2566,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18317,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8406,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 725,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 366,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 17998,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8888,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5584,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18318,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18319,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 624,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3037,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1448,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1266,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18320,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1374,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18157,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2444,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2445,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8889,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1375,
    "Bill Date": "05-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2432,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3038,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2433,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1769,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9784,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 87,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1840,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1841,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 914,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18158,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 10,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18159,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18553,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18554,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 11,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18555,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18556,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18557,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1376,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 12,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18558,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18559,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 13,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 14,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9297,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18560,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8758,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18561,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18562,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 915,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 202,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4766,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2721,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9785,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2510,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7585,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18160,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2711,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2577,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 251,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9786,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 625,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8890,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9787,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4205,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18622,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2905,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3617,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2578,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2434,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 162,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 644,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 163,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 164,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18623,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18157,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4980,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 165,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9852,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18624,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 166,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18709,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 167,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9298,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18710,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 527,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8759,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 626,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18625,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 916,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18626,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4767,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46337,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18161,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2820,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4801,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3040,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 3001,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 168,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18627,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2821,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2822,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2823,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2722,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 917,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4662,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4802,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3042,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3041,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18628,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3001,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 139,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 140,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3002,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 627,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7586,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 160,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 840,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18629,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 161,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 169,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 170,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 171,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18711,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 172,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18712,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18713,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18714,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3032,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 173,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 138,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 980,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 174,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1449,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46141,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18630,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 981,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 262,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2919,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2631,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3003,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2920,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3004,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3005,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2921,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3006,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8081,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3007,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8082,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3008,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8795,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 175,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 628,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 176,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3009,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 7572,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3618,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 726,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3619,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18563,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18564,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4804,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18565,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4803,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18566,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9788,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4204,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18162,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1450,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 177,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1933,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 178,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3043,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 390,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1451,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1267,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9789,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18715,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18716,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18717,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 335,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 645,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1452,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2579,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18631,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 16,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 17,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2446,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18632,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 179,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 180,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2447,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 181,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 182,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 982,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 183,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18633,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18718,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 328,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18719,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 646,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2448,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2831,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 647,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2580,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1765,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2922,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18163,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 9976,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2632,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1453,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 9471,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 184,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 918,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 622,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18164,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3620,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3621,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 648,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1454,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1455,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18156,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1456,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9853,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2436,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18165,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2449,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9854,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9452,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3010,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 4812,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2634,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18567,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 649,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 650,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 185,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 186,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2450,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2512,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2513,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1457,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2140,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2141,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2514,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3132,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9790,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4979,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3011,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2451,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2312,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 187,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1377,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1378,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 651,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 3600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 727,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3012,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 320,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2635,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 188,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3412,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3622,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9299,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1268,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 629,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1458,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3013,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 245,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 18,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3044,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3045,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3046,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 40,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8760,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3048,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 919,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 19,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2832,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2833,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2142,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3014,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2923,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8083,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1459,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 630,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2924,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2824,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2825,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3015,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3016,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1460,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4768,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 920,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2834,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 652,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18166,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2636,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 921,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 189,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 190,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2452,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2509,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45754,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 100,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18634,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18635,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 922,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18167,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7446,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7447,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 191,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7448,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2581,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18636,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2453,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3413,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2454,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18637,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18720,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18721,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8796,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18722,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18568,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 631,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 426,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4537,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 653,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2582,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2583,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18638,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2455,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18639,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18723,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 192,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3047,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18724,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18569,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43680,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18570,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18725,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2456,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18726,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2457,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2925,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 193,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4207,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4769,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18727,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18728,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18441,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2143,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18729,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7872,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 194,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18168,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46338,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2584,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3623,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2585,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7873,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8891,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2458,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1271,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1461,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1934,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 195,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43681,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18730,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5905,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18571,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 196,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2586,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18572,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18573,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18640,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 197,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4981,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2436,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2826,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8412,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1462,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2515,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18641,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1463,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 198,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2437,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3624,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3050,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1269,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1270,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2587,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18574,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18575,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 600,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18731,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18732,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18576,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 20,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18577,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2926,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8515,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 21,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2637,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2438,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2459,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2460,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2461,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 220,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9791,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 654,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2439,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 199,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 840,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2827,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8413,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2462,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 340,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2828,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2463,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2144,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 141,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2588,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 655,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 8084,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1736,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1843,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4805,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8797,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1935,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 656,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8761,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2516,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8410,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 200,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 22,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45756,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1464,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2464,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8414,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 657,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9453,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43113,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 9300,
    "Bill Date": "06-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1770,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4806,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4807,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3051,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4808,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3052,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4809,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4810,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2906,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2907,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3625,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3626,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7587,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 923,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18321,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2835,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2836,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 924,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3053,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7449,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9792,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7450,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7451,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1379,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2440,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9793,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1801,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18159,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18578,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18579,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2589,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18580,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18581,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 221,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18643,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18582,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18583,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18584,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18586,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2442,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9967,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18587,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18642,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18588,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18644,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4663,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1943,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 201,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18645,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18646,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1272,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18647,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1273,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 335,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 658,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7588,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1274,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1275,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7589,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 632,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 202,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4811,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18160,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43682,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 925,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 330,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9794,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 926,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18648,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18733,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46142,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18734,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 154,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1276,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 206,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18589,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2830,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18590,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4812,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2831,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2638,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2832,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2639,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18591,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 177,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8892,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 659,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8893,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9795,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8762,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 633,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8763,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 660,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18649,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 634,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3017,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3018,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3019,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 203,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3020,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8516,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3021,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2249,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2250,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 635,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 636,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9796,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18592,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18735,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1802,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3022,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1466,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 204,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 242,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1465,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18736,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18650,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3023,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18593,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18651,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1803,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1467,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 983,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7590,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46143,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1804,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2834,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1468,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2590,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1469,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1277,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 661,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18652,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1278,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9797,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1470,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4313,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4814,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18442,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 345,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4815,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8517,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2465,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7452,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1471,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7453,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2837,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2640,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 205,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2591,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45757,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 150,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2927,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 8751,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8085,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8764,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8765,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18653,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18737,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 206,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 207,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 208,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 360,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 209,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3054,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1944,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 662,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 637,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 210,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 211,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2441,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6249,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2833,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2835,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8766,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2466,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1280,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2467,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2468,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1472,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 212,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 213,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2928,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2929,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3055,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7941,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7942,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2469,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2470,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1282,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2443,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1473,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2836,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1474,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3039,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1475,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 214,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1845,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3211,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2137,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 663,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2837,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2838,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 664,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2145,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7591,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7454,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1771,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 215,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2838,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43683,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3628,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 297,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2839,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 216,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1805,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4816,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3024,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 2930,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2931,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2932,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18162,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1806,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1476,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18594,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18161,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1772,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18654,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8415,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2933,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 153,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18595,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3049,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2471,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 217,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18596,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 214,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 218,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18597,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3025,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3026,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3024,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9855,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18655,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46144,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9798,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2472,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 219,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18656,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18657,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 927,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18585,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18738,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18658,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18598,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1477,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 638,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18599,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 665,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18659,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18600,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18660,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18661,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18739,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18801,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 639,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 928,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18802,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1478,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18803,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4208,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 88,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46339,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46340,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2444,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46341,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2445,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2934,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18662,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18806,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2041,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 220,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1479,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18163,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1480,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18740,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4982,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18741,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18742,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 984,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 460,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2446,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7592,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 221,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 303,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18743,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 985,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1809,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7455,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2517,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2473,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1481,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18744,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 264,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18745,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 24,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 222,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 223,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 986,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3057,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 23,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4817,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2146,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2474,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1380,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8411,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3627,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5585,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9799,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9800,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18663,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2593,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2935,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1846,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18164,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18664,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18746,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 263,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18747,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 224,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2475,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2476,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1482,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18165,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18748,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 640,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4770,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1483,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2840,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1381,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18804,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18805,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7874,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18807,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 225,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1808,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1283,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43684,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 600,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 667,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46342,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2839,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1807,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1284,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2477,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 142,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1936,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8416,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3058,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8918,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 668,
    "Bill Date": "07-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1773,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2723,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2724,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2447,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2138,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4209,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 9718,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2313,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2642,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2841,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2643,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2448,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 929,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8417,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 930,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8767,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 641,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 642,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1810,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2842,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 987,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3629,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18665,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2725,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18666,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 931,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18667,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18668,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 932,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1847,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18669,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4210,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9454,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4771,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3059,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2829,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18670,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2936,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18166,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1811,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18808,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18809,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4818,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18810,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18811,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18812,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18813,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2843,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18814,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2547,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18671,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1286,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3102,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18672,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3414,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18673,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8086,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2908,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 304,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1484,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 643,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2844,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 644,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18674,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18167,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2937,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 933,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2594,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7593,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 669,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2938,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 728,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 645,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18749,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18750,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18751,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 243,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18752,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18753,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18754,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2595,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5906,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 500,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1485,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2596,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3027,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2597,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 341,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3029,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4819,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4820,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18675,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2644,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18676,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 934,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2645,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18755,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2845,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3028,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2726,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 25,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18756,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 26,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2939,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 670,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 671,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 988,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 228,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3030,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1486,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 672,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 226,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 227,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 229,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 230,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 40,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 231,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8768,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2846,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8935,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8936,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1487,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18168,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8937,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8939,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18677,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18757,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2449,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1945,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18678,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18758,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2598,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3103,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 0,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 233,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3104,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43685,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1488,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 234,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 1167,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 235,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 236,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1287,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2940,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2941,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 675,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7594,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7943,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 646,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8769,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18169,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1288,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1937,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 673,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 674,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2147,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8770,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3031,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3033,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18679,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3032,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2148,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 935,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8771,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3105,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18759,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18760,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18761,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2646,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9968,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18762,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 374,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18763,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9969,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1938,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 176,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2450,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2451,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2727,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 676,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1812,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1382,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8798,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3034,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46241,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3631,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1489,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4821,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3632,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2728,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 237,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2518,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2452,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2942,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 150,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1946,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3035,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7875,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3036,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46145,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3060,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 240,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3633,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2943,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3106,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8418,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8894,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3630,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 232,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1490,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 238,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 239,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 233,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 241,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2944,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18680,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 666,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 7944,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 242,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2139,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 243,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18681,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18682,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18815,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18816,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9856,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18764,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18683,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 244,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 245,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8799,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18817,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18818,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18684,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18170,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45758,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 246,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1289,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 51205,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1939,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3037,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3030,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3039,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 989,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18819,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18820,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18821,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18765,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18766,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18767,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 936,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 648,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18768,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46242,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4822,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 340,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3061,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 647,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 677,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 350,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 649,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6250,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9455,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 678,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18171,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3062,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18172,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8895,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 263,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 428,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 427,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18322,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45759,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 150,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18323,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1774,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 651,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9456,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 937,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 247,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18325,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9857,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18685,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46146,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18822,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18823,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3107,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 90,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 248,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 268,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 91,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18324,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 92,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 680,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1491,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6251,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1492,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1947,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1383,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1493,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1384,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 249,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3108,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43686,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2841,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1385,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3063,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 250,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 251,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1386,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3056,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 450,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3133,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18173,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3040,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 420,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2647,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2599,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8772,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46243,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 252,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2847,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2150,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18174,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 652,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1813,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9457,
    "Bill Date": "08-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3215,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2848,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2729,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1775,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 938,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2730,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2141,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2140,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8419,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1290,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 653,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 654,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 2600,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 939,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 227,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3634,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 940,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3109,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2453,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 186,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3110,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2849,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18687,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8773,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18686,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7456,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18688,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3064,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4213,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 655,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2454,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3065,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18443,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3111,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18689,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18175,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18690,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 235,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18444,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4214,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1814,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18691,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7595,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1815,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18692,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18769,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9858,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2731,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18176,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9859,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3066,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3041,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 150,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18693,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 8800,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18326,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18770,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9458,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18694,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2850,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2945,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 6774,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18771,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 253,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 254,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 27,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18824,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18825,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18826,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 28,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18827,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18828,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18829,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1494,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18830,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18831,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1495,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18832,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1291,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18695,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 345,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18696,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1292,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1293,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1294,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1295,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1296,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 679,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2455,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 255,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 265,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 256,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 257,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1848,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2456,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 681,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3112,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 682,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2314,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1940,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1776,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2151,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8087,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8088,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3635,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3636,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 258,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 259,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 260,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18697,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18698,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18699,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18700,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18901,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7596,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7597,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18902,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 990,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2946,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2457,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3067,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2519,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18833,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2851,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18834,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46147,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2852,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18835,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 261,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18836,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18837,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 991,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46148,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18903,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 264,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8421,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7457,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 992,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7458,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1297,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 683,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2947,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18445,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 684,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3042,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8774,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2853,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 263,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3201,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3202,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 690,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3203,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2948,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 689,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9459,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4212,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18904,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18773,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 29,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4687,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 267,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3068,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1816,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 30,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3069,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18905,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4772,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18772,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18906,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18774,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7598,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8775,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3070,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18446,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1497,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18907,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3084,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3043,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18447,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3044,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 320,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2949,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 380,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2648,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2950,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2649,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18908,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4983,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 268,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18838,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4984,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8776,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18909,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2520,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 265,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 685,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2951,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 941,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 252,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2952,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1817,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2953,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8896,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8897,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2459,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8082,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1818,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2521,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2954,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 266,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8898,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8777,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 94,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2910,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8899,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4206,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1941,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 269,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 942,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 0,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1298,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3113,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 271,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7945,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7946,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2955,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2956,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7947,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8778,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7948,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7949,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7950,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7951,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 0,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3134,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1849,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1498,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18910,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1850,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18448,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1777,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2909,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1499,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3071,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2149,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18449,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18775,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 364,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18777,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18778,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18779,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 212,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18780,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18781,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 272,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18782,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3072,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18783,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1773,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3045,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2854,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2460,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43687,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43688,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 93,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4211,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18784,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 241,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2152,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2840,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 255,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3638,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2251,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2252,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 363,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3046,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 263,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4985,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2957,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2842,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3135,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 0,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 500,
    "Location": "DMG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 273,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 445,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 274,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2461,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1299,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 143,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 144,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2843,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7876,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2462,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 276,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18785,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 275,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43114,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46343,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 277,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 11177,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3073,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1500,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 656,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 657,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18776,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 686,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7599,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 31,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 32,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 687,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 943,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18839,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18840,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1819,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 944,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18911,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2958,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2959,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3114,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8779,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 688,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1300,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9458,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 303,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 273,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1501,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 691,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2522,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18912,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1301,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2911,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18178,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 279,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4986,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4823,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1820,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7459,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43689,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1302,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4215,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8942,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18913,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8256,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3640,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3641,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1502,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18914,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8780,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 282,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 280,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18915,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2732,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3047,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 281,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18916,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43690,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2463,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 310,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4824,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2960,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8781,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 692,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3074,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9461,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3642,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1851,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46149,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18841,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 350,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 287,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18842,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 286,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18175,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18843,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18846,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2961,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2962,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8782,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18844,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18845,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1503,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 945,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18847,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7460,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1942,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3115,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2855,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2963,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2464,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2465,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18848,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18849,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3075,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2844,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1504,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46150,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 693,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18328,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18327,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18329,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2964,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 429,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1505,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 640,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 288,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2466,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18330,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2523,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18331,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2153,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3643,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46151,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2856,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ranjith",
    "Rec No": 0,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46152,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18850,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18851,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 210,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18852,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 946,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7952,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2965,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2966,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18853,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2845,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3076,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 650,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3077,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1821,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2967,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2733,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9860,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2734,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18450,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2848,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4825,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9970,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18854,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3116,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 436991,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4216,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2968,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3078,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4826,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1506,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18787,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 618,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18788,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 208,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18786,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18789,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18790,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18791,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18792,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18793,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18794,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18795,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18796,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18797,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1285,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2847,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8421,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18179,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18180,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3048,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4217,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2467,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1496,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2154,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1822,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3204,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 318,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2650,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46153,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3637,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1852,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 729,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2969,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 993,
    "Bill Date": "09-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8783,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 7600,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 501,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8784,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 947,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 948,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 949,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8422,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46344,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 400,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43692,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46345,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8423,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46346,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8424,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46154,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46155,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 950,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 658,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18451,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 659,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43693,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3117,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18181,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 292,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 694,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18452,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3049,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 283,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 284,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18332,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 285,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 289,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 290,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18333,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 291,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18334,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18336,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18335,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18337,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 695,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 293,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18453,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18338,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3644,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18339,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46156,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 661,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 662,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 294,
    "Bill Date": "",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3079,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4664,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3080,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 340,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 663,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18798,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 295,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18799,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2468,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 296,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6252,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 297,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 298,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 299,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1823,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46347,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3645,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3646,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3647,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46157,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 600,
    "Location": "BNG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1303,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 300,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 450,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1304,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 301,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1305,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 190,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1307,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1306,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1281,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 33,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6253,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9972,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6254,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 696,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2970,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9971,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2971,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2972,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2709,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2974,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3205,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46158,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 664,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1507,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1508,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2478,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 89,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18174,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3118,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18917,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3119,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2848,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 213,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2849,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18918,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2850,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8092,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4827,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8091,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2469,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8043,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2470,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 450,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2471,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18919,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18920,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2975,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 302,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2155,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 345,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18921,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2156,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18855,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 303,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18856,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18857,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2157,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18858,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2158,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 698,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18175,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2651,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18922,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 730,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8785,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 699,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2851,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18923,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18176,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4828,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18924,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 700,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 304,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 701,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 213,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 95,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2315,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2735,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1824,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 30,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18925,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1943,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19001,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 305,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 306,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 840,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 307,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 444,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3206,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2976,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3207,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3208,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 154,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2977,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 665,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2978,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2979,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2479,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 480,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2980,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18176,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18926,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2981,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43694,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3120,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 702,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 952,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 308,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 1800,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18177,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3121,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 155,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 666,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 330,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2982,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 2983,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 48818,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 309,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18178,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1509,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 96,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 953,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1773,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 667,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1825,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 954,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3050,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3051,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3052,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2316,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7878,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7879,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1387,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8786,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43695,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 955,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1388,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 703,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2852,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3123,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 7462,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18454,
    "Bill Date": "10-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2736,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1308,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3082,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1309,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1310,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3083,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3081,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1311,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 502,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46159,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4218,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1853,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8787,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4219,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18859,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18860,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18861,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46160,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18863,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18864,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18865,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18866,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18867,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18868,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18869,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18870,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18871,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1948,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18455,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2472,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3084,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 206,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 704,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18927,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18928,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18929,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2142,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18930,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18931,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18340,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18341,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18932,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1780,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1781,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18933,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18934,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1782,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18342,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3085,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1944,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1389,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19002,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 246,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2143,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 136,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18935,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2473,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18872,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18873,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 956,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18874,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18875,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18876,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18877,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19003,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2738,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 705,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 8900,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2652,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3124,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4829,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18936,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 97,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4830,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 957,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2159,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 146,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8425,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 310,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3209,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3210,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 311,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3211,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 958,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2524,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 98,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3051,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2525,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18937,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1826,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43696,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1827,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3086,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3053,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18938,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1828,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3125,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3054,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1783,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2739,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3056,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19004,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1829,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 145,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3087,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1510,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 706,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1511,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3213,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3214,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 707,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18878,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18879,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1854,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2854,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 259,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2855,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 959,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 709,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 99,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1390,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 960,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3122,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 669,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8426,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 1331724109,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3217,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3216,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19005,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8943,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19006,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 710,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 312,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 313,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 314,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9462,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9463,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46161,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 900,
    "Location": "BNG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1945,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4987,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1512,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 450,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4988,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2653,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4220,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4989,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4990,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1513,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4991,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 315,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 1560,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18880,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1946,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2856,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8518,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8519,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 316,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 317,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1514,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19007,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 600,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1855,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18939,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 318,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7461,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1947,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 319,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19008,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3212,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3089,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 994,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18179,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 711,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 1800,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 995,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 323,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 996,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8788,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8789,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19009,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 997,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 320,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1830,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18881,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 697,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 998,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 321,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1856,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 712,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 400,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9464,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1515,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 1800,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7463,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3127,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 322,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 999,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2984,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2985,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 713,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4831,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19010,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2986,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2987,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 322,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1948,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9465,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18862,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4832,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46162,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 325,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19011,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1857,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3215,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 154,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1516,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3649,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2857,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3648,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2858,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4834,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2859,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3650,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2988,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2860,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3216,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 206,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2989,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3601,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18180,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3602,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 714,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7464,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2990,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18940,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2861,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2862,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18882,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2655,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2991,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45760,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 1800,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3217,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8790,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2992,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 255,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 671,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7877,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8791,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8093,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 8094,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2863,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4992,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3133,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2912,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3136,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2993,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19012,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1312,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1831,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1858,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 955,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2317,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1832,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 525,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2318,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 3603,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3090,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 3604,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2853,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3651,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 3606,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19013,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3218,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 3607,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 3605,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 2480,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3057,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 503,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 326,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 327,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 328,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 329,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2474,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2740,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8792,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 961,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46163,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3055,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 560,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2656,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7880,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 330,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1313,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2160,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 672,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9862,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3128,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2654,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "MTR",
    "Rec No": 6674,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 1800,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2994,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3129,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8793,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3652,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43697,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1844,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2526,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2995,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2996,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9973,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2997,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2998,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 2999,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 1000,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3058,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1784,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1949,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 176,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2864,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2475,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18181,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 962,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1517,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1518,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 660,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2865,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18883,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18884,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3130,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2481,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3126,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2476,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 331,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 332,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3094,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 335,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 715,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 360,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3000,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 320,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 333,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 262,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18343,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18344,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18345,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18346,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1519,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3608,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 334,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 335,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 430,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3218,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3219,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19014,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 304,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18347,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 336,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 338,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 337,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 339,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2657,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19015,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45765,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19016,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3701,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3702,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5586,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18941,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3092,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19017,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2477,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3501,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2478,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2866,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2867,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8794,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 340,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1520,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3653,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 716,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3609,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2658,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1521,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2527,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1522,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4773,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18885,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18886,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18887,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18888,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18889,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18890,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18891,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2741,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 220,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18892,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18893,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18894,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18456,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8795,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2868,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3654,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45766,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 470,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43115,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3502,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2161,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3093,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3131,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2659,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18182,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4993,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4994,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18348,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3703,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 668,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19018,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8427,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19019,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9974,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8947,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19020,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3223,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3221,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 259,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3222,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 259,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43698,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3704,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2660,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 717,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18942,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18895,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18896,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6255,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3094,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3224,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3220,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7881,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3610,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9466,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3705,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3225,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 315,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7465,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3611,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 718,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4995,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18183,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4996,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3059,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3088,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 719,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 720,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2479,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3706,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3707,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3708,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 155,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 721,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 147,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1833,
    "Bill Date": "11-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3219,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2144,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46164,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1391,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1859,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3132,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4538,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9861,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18457,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2480,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18458,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1314,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1315,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8796,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18459,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 155,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 963,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18898,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18460,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18899,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18900,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19101,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19102,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18461,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 182,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 18897,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19103,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2482,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 570,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19104,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19105,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19106,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19107,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2661,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19108,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2481,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19109,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19110,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3133,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2870,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8428,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3134,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2483,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18943,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2742,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1392,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2662,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3655,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3656,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46244,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46245,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18944,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19111,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4998,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1860,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43699,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3135,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18945,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2482,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9863,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18349,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2857,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2858,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 227,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18946,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1861,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3136,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8797,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4835,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4836,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19021,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3503,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3709,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19023,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19024,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4997,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18947,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18948,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2859,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 722,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 723,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19022,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3226,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1316,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1317,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18949,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46165,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3137,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 964,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18950,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3227,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18951,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3710,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 965,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3711,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1523,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1524,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1950,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2861,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3096,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 676,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19025,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19026,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19027,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19028,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18184,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18952,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2484,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43699,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1525,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19029,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 154,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1834,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 724,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 725,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2485,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18185,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 677,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 673,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19112,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19030,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 100,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 341,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 342,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18186,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3301,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 966,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2869,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2486,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3138,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 343,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4999,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4837,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3712,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 223,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1835,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3713,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4833,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 401,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18183,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1836,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4221,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2860,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19031,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2487,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4665,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19023,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 678,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3097,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3098,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18184,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 5000,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46166,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2488,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46167,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 240,
    "Location": "BNG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 324,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2489,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4838,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4839,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18953,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1949,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3060,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2490,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 420,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2913,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8798,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3504,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 726,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19033,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19034,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1318,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3657,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1319,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2871,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3658,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 680,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2491,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 350,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2737,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 727,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3220,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3063,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2492,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2743,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 681,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45761,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 344,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3099,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3061,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 504,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7466,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2862,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7467,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 9467,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3714,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 510,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3612,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 505,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18954,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19113,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3062,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19114,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1788,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19115,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3095,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3715,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2663,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1785,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1951,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2664,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18955,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 345,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19035,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 346,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 347,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1862,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1863,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 348,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18956,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2493,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3228,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18350,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18351,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2494,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46348,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 968,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 43700,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1864,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 48340,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3065,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 349,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1320,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4222,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18187,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3229,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 266,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18957,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19036,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19037,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19038,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19039,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 235,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19040,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 182,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 969,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19116,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3100,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19117,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 2253,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19118,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19119,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1837,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19042,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19041,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 188,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2145,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4801,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2872,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2873,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3066,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1865,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8800,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3401,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3230,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2665,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 402,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 9468,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5587,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4223,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 0,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2483,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1786,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2484,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3302,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3303,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8520,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3139,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3101,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3102,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 970,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2528,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2485,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 971,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18188,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2486,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18189,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5401,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1790,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2914,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 320,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1838,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1839,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 682,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 728,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3221,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2254,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2874,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18958,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2875,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 729,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18959,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 730,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2530,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19043,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7468,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18463,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 325,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2487,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18960,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 972,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18961,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 207,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7882,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3613,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 148,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 149,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18962,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19044,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1840,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18464,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18963,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46349,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43116,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 600,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19045,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18964,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2146,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18965,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18465,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 973,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18466,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3716,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2255,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46168,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3103,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 350,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7469,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18966,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 245,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 731,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46169,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 180,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19046,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 352,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18967,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2488,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19120,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4224,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19121,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19122,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19123,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19124,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19125,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1866,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19126,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19127,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 732,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3717,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3402,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8429,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1393,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2876,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9864,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 353,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18462,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5402,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 310,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3403,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1787,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 506,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 354,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 355,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 153,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3231,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3232,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3140,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 356,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 357,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 3660,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 679,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3614,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3137,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19128,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19129,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19130,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2863,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18967,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2864,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 733,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5403,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46170,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46171,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3141,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3222,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1952,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3223,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19131,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3304,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2531,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2877,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2865,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1953,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 241,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19049,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1321,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3615,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1322,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1791,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1526,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19132,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5405,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1527,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 734,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19133,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3104,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1528,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3233,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 735,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 330,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1529,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1530,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3234,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2256,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3505,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19134,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1792,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9975,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4774,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4775,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4776,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2489,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18969,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2490,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1323,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2458,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Google Pay",
    "Rec No": 0,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3067,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 358,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 403,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 359,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19050,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3616,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19051,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19052,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3064,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 560,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18970,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 736,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19053,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3718,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 360,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 737,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3661,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 361,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8430,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 363,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3235,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3236,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 364,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3237,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 365,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 366,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 367,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 368,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 369,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 153,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1951,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 160,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19054,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 370,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 371,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19055,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 974,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 182,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2491,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18352,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18353,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3507,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8521,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2666,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3508,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2495,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3142,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2496,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1531,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1532,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 975,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 738,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 739,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1324,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2492,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18467,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 683,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3719,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2668,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 685,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 686,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3143,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 740,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2319,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 259,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 372,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 373,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2533,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2878,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 684,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1954,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 976,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 741,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2879,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1841,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46246,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 687,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3238,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3224,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3720,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2493,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2497,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2498,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2495,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3144,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2880,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3079,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19135,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18354,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3662,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 410,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1955,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1793,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3721,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 688,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1533,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1534,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3659,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 374,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3068,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 372,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5406,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18971,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4666,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7470,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2744,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7471,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18972,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1536,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1536,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 689,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 742,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1537,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3146,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9976,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3722,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 977,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3723,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 475,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 743,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1842,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2494,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3724,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 376,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 377,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 378,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 190,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18973,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 207,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46173,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46172,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 600,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19136,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 362,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19137,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1538,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19138,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3725,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1843,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2534,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 744,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 745,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19056,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 381,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19057,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 382,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 383,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5407,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 746,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9469,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2669,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9470,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19058,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 731,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 507,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2529,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2535,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7884,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4844,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 245,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3726,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 650,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1844,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 1098,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8095,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3145,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 380,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1539,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 185,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1540,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2869,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 503,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2867,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18355,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2868,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18356,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1326,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3138,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3239,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1327,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3240,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3241,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3105,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19059,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 978,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19060,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19061,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19139,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19140,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19141,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18974,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1394,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1950,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19142,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19143,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19144,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3242,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18468,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5408,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18469,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19062,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 747,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4423,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1956,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 384,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 301,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9473,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3243,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2495,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1329,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 460,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3244,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4424,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2881,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3617,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1789,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5409,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 2500,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 748,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19047,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19048,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7472,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 967,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43117,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4843,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4802,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1535,
    "Bill Date": "13-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5410,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42701,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 240,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42702,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42703,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1867,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1845,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42704,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3663,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2147,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4688,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1846,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3245,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19145,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19146,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19147,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46174,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46175,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46177,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2162,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 690,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 691,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8522,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7473,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1957,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7474,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7475,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9977,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7476,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3305,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 674,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18357,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18975,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3106,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2496,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3107,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3108,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1847,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2257,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19063,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4845,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2882,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2883,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 749,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19148,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46351,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19149,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19150,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46352,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 225,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46353,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3801,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3664,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18976,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2497,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2498,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18470,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2866,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2670,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4803,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 675,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 385,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 732,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18977,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2871,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 979,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8096,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2671,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9865,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3086,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2884,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3618,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3509,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3148,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18978,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18979,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18980,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19151,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19152,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19153,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18981,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1868,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18982,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3802,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2672,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3246,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3071,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3072,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5411,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18185,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1864,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18983,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18471,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1541,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1869,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3109,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3247,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1795,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3665,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1796,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 351,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1952,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 386,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 387,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9474,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2532,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19065,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 170,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19066,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3225,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2321,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19067,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2499,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19068,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19069,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19070,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19071,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 180,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 751,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45762,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2537,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 980,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18984,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3073,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46176,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46179,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3666,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7895,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2484,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1330,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1331,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1332,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1328,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2872,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 752,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2873,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3226,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 150,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 315,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 151,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18985,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18186,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 733,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2500,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1542,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18986,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 340,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19072,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3727,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19074,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2745,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 317,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18987,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2885,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3728,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3248,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 509,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1543,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3075,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3077,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3405,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9475,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9476,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 390,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4777,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3249,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3110,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1333,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46180,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9477,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 389,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 391,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 753,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5412,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 981,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19064,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19075,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 982,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5413,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1848,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46181,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3111,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3149,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 392,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2163,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 323,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3667,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 393,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7477,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4846,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 394,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3250,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5414,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2673,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 692,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1334,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 395,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1395,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3729,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 235,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2501,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3150,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3406,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3730,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 396,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 397,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 398,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1958,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2674,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3251,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1849,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3731,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2870,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2536,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1850,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3732,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2675,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1396,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 399,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 400,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3733,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18187,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18472,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3306,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2322,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1794,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4848,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4689,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3668,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3669,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 754,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18988,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8097,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18989,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19154,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19155,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3252,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4844,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3670,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1544,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 401,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18990,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3152,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18991,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3734,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19156,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19157,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2676,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2502,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3803,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1545,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19158,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3619,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9866,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3510,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4847,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 755,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5415,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3112,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3735,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3113,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 337,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2258,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3736,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2538,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4804,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19076,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19077,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1959,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1851,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1854,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3804,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 750,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 756,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 153,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5588,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2677,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2503,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3407,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 757,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18188,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2874,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1546,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18992,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3070,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3805,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 560,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 758,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3253,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18189,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3114,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 402,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 403,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 390,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 404,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 405,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 406,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 407,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1547,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3671,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3672,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3737,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3738,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 495,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3151,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18190,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46356,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19159,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3673,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19160,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19161,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 510,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3254,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18191,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3806,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1548,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19078,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19079,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3408,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 220,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19162,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19080,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19163,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19164,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19165,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1550,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2746,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3409,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19081,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1540,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 408,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 759,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 403,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18993,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 760,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 761,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19073,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1551,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2504,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18473,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 734,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1960,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 763,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2505,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1853,
    "Bill Date": "14-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2506,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5416,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1335,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 900,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1336,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1337,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1338,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1339,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3675,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2886,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2507,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1340,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1341,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 335,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1342,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1343,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1344,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3153,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3115,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2508,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3116,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 693,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1345,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1346,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1347,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1348,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1349,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18191,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2979,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19166,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3676,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3677,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3154,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18994,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 983,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2680,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4690,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7478,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18995,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3807,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18996,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2875,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46182,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3255,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 212,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18997,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2915,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2887,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1953,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7479,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19167,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3227,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19168,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19169,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3078,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3256,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19170,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18998,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19171,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19172,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 18999,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4849,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19173,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19174,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2539,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19000,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2540,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3307,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 8799,
    "Bill Date": "12-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3079,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19201,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3080,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2148,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2681,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 511,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1870,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19175,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1552,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1553,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19202,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19203,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 750,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 780,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 764,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3620,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19204,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3621,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3622,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3623,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3624,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3625,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1852,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19205,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 35,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4805,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4806,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19176,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1798,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2682,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1797,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 984,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2683,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3678,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 985,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3679,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3680,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 986,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1554,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 400,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3117,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 405,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19206,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 1917,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1961,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19207,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2509,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5417,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3158,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3157,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2747,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19208,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 987,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1555,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3626,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9478,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 152,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 262,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3627,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3628,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3258,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3259,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3629,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4807,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19209,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3145,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 150,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45767,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46354,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1397,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46355,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5589,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 650,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46359,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3674,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 500,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19210,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 512,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 153,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2684,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2888,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2889,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18192,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2890,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 410,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 411,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 412,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18474,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 413,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5418,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 414,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 350,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 415,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 416,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18193,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 18475,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 696,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 697,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2541,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1350,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 988,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1556,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2685,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3260,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3261,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19211,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19082,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 765,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5419,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46183,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8098,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8099,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19083,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3630,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4225,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 698,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 417,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 418,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3410,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1356,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3091,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 699,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3631,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4850,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3257,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 210,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 695,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19084,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2916,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1351,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 420,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 36,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19085,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 37,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 41712,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 419,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 39,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2885,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45763,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 190,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 40,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45768,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19086,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 182,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 379,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 34,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2876,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1962,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 41,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7886,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3632,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3633,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19087,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 766,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 253,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 989,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 7480,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 767,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 700,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3634,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2748,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3635,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9479,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9472,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9471,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 701,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 990,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 694,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3156,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 991,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3681,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8971,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3636,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 42,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19178,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2259,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2260,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 702,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 422,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4667,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 703,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2322,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 421,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 423,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 154,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 992,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1557,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19212,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 768,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2320,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1954,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19089,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19090,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3808,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19091,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19092,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19093,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 150,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19094,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19213,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46178,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4851,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18358,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2678,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1558,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1559,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19088,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19095,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8431,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4778,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5420,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1560,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkateswrao",
    "Rec No": 431,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19180,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2542,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19179,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45764,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2877,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 993,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 994,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 155,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 43,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 156,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1855,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 44,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 995,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19214,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2164,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1561,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6256,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 424,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 425,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2149,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 426,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2324,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3637,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2325,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19181,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3262,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2878,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46184,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2510,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5421,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19096,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2511,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19097,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18359,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3118,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2261,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 427,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 134,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 769,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5422,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 46179,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1562,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3809,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 406,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3810,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9867,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 330,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3814,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 492,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2749,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19098,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45769,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3319,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19099,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 388,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 38,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19100,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 46,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2402,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4226,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 407,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2686,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 513,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3683,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5423,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18193,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3684,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3685,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19182,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2403,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3682,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2512,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19183,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2750,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19184,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2401,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19185,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19186,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19187,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1871,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 428,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7481,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2405,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1325,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7887,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5590,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 770,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8432,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1398,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 0,
    "Bill Date": "15-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1353,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1354,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 182,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1355,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 2357,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 252,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1358,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2513,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1872,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2514,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3120,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46185,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4668,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2406,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3159,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3411,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2751,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2607,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 500,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3121,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1799,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 408,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3263,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1963,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19401,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1399,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3147,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19215,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3155,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19402,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3687,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2752,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3688,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1964,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19403,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19216,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3739,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4852,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4853,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 771,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18194,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19405,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3264,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19217,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3265,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18195,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2879,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8433,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9481,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9482,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2687,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19218,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2688,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3122,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 772,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19219,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2408,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 360,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2409,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2410,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1856,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2411,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19188,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2412,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19189,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 429,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19190,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 430,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 431,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 432,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3123,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19220,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42706,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1563,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1564,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 255,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2753,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2150,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4854,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4227,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19221,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46247,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2880,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 8100,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3266,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 154,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42707,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42708,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19222,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3124,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19191,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3740,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 235,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4842,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19192,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1565,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19193,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19194,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2543,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2891,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1873,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3741,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19223,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2544,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3638,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5591,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46186,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 225,
    "Location": "BNG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3742,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46187,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19406,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1359,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19224,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3267,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19407,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 1500,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3686,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1566,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 704,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1567,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19225,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3506,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3639,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19226,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2689,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19408,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19195,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19196,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19409,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19410,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19197,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19198,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19190,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 773,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3743,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19199,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19200,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3689,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 1800,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19227,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2881,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19301,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19302,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1568,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3160,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2892,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 433,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2545,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 434,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 435,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3125,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2893,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4418,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 436,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3812,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3814,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9480,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2883,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 213,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3744,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3745,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 189,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2882,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8434,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 437,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4855,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 438,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2894,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19411,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2895,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19412,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45770,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19413,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19414,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 223,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19415,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19416,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 439,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19417,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3082,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3691,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 705,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1352,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1569,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3746,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 240,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3813,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 514,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3126,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2754,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 45,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 47,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 48,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 49,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3083,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42709,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3268,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3269,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1857,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45771,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3270,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3412,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 515,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46188,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46189,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5908,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 5907,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3693,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 774,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 440,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2917,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 441,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 442,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 443,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 444,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1965,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3747,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5424,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2262,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 706,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 50,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 445,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2755,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2884,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3748,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3749,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 157,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1955,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 775,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3815,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19303,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 776,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3750,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1572,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3694,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3695,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1571,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 446,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 180,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 447,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19304,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19305,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 214,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 996,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19228,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3816,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3690,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 777,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 448,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19229,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 214,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19230,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3692,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 450,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2690,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2546,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19231,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1573,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 131,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19232,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18191,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 516,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2515,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3751,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3752,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3753,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1574,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19421,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19422,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19423,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3817,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19418,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19419,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19420,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19424,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19425,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19426,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19427,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19428,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19429,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46356,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 778,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46357,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 779,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9868,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1575,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1956,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9978,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 762,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9979,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5425,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3754,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3127,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 997,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19233,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3161,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 450,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4001,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3162,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4856,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19431,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19432,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 315,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19430,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3755,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3511,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": "19180A",
    "Bill Date": "16-Jul-20",
    "Recd Amt": 80,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3163,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 998,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 707,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3818,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 708,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1956,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2326,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4426,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46190,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2691,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 709,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19306,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19307,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19308,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19309,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19310,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19311,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19234,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4808,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4669,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 999,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46191,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19235,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3272,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3271,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19236,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19237,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1966,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2896,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 780,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46192,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 400,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19238,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1858,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19239,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 451,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19312,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19313,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2756,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19314,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19315,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19316,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18359,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19317,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19318,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3756,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3757,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3758,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19319,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19320,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9484,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4229,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5426,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5427,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 781,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2516,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3819,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9483,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3128,
    "Bill Date": "16-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3413,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7888,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3414,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2897,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46193,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2692,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 710,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19321,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 1400,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19322,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19323,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19324,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19325,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19326,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19327,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19328,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19329,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19330,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3697,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19331,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 711,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42710,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42711,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7954,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18360,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 517,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 713,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7482,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 712,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2327,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2328,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19240,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2165,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 270,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1957,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46194,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8435,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18192,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4857,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19241,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19242,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8523,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "P VENKATESWARAO",
    "Rec No": 7955,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1874,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3759,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2517,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46195,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19433,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1360,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19434,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1361,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1362,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 182,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1364,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 340,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1365,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1366,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1367,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1368,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 153,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19332,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2885,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3273,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 452,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19243,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3274,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19435,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3275,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3129,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 335,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43118,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1576,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43119,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18193,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2898,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46248,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2899,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1577,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19244,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19436,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19245,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2520,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3698,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 453,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3760,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3820,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3821,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5428,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 225,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1578,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7889,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 390,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1859,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19437,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19438,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1570,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 40,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2166,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19246,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 454,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 714,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 782,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19247,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3130,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3131,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4230,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18194,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19439,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19248,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 715,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3640,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2547,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 500,
    "Location": "DMG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3761,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3132,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 716,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7483,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1861,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3762,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1579,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3822,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3823,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 783,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3699,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2548,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19440,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19441,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2900,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 310,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18195,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2693,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 158,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42712,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3764,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 170,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46249,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3133,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19442,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 455,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1958,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4809,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 456,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5429,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 457,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3164,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18196,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3512,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 315,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1369,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3696,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3134,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 458,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18197,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3165,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19444,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 518,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 784,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3139,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3140,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19333,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2263,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2413,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 459,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2518,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1580,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3824,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 460,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 340,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3765,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3766,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19443,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 461,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19445,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19446,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19447,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2757,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 462,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3767,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1370,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1875,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3763,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 409,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18198,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19448,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 449,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4670,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19449,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 410,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2836,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4002,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1860,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 52,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3135,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46197,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2549,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2167,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2168,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2550,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4101,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2551,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 4619,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 240,
    "Location": "BNG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2414,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3136,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1959,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46199,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 53,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2887,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46200,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 900,
    "Location": "BNG"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1960,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4810,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4811,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18198,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1582,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3768,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3769,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3308,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1583,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4812,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19450,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19451,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18199,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 519,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2888,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 717,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1584,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18200,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 785,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 463,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2694,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 346,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2695,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3770,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 225,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2696,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 310,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4102,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19249,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 464,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2697,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19250,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19452,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19453,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19454,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2552,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19334,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3166,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19335,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19336,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 221,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19337,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19338,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19339,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2169,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 240,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2889,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19340,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1363,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3277,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3641,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9980,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3825,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4779,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6257,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2890,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 465,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 1560,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 51,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 786,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19455,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 317,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 466,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19456,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19251,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 787,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19342,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19341,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19252,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3309,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19343,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 788,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8436,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1581,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 18501,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 54,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 468,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19457,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 469,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1371,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3826,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3228,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5430,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1585,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45772,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 470,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 0,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4003,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18361,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2891,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18362,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 471,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 472,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3137,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3138,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3513,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 467,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19502,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4860,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4859,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3415,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3417,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3416,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 719,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 473,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3827,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2519,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 474,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19503,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19504,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19253,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 720,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19344,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19345,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19346,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19347,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3828,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19348,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7484,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1586,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 789,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8988,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2521,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8985,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 475,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 476,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3829,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3418,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2522,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44901,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2893,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5431,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3168,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8437,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3700,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1876,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 721,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1877,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2615,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4231,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3701,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1863,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1372,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1373,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2523,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4232,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4104,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19254,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19255,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4815,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4816,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4817,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4818,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19256,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3169,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3170,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19257,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8439,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7890,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19258,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44902,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19259,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 46196,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19349,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19350,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1864,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19351,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19352,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19353,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19260,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19354,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19355,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19458,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19356,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3276,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 520,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2758,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19261,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19460,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19459,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19461,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3171,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19357,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 9486,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19462,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 477,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8524,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8525,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 735,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1587,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1588,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1589,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19262,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19463,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2524,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 160,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1967,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2698,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3514,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19464,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4819,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 790,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 999,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 791,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19465,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 550,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 478,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4861,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19263,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 521,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 159,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19466,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19467,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 522,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4814,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3086,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 479,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 480,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19264,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 481,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46358,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19358,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 792,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19359,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46360,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3515,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19265,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4858,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3167,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4862,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2892,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19266,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4105,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3278,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 206,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3172,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1374,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 793,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3279,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3830,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9487,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44903,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1968,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3139,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 794,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1590,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3642,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3643,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 492,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3644,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1878,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 182,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8526,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3702,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4106,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3703,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3831,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2555,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 0,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3704,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3173,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 482,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 483,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3141,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 100,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3142,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3310,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 795,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 796,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3140,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1591,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2525,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1592,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19267,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19468,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19501,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 484,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 485,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 205,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19469,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9869,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 486,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3705,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 270,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9488,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4863,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1375,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 255,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 487,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 411,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1879,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3832,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2759,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3087,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3088,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3089,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3090,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3091,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3092,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2416,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 55,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2526,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9981,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1880,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 225,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4103,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 797,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3645,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2556,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45773,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4201,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 724,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8438,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4202,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4864,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 240,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19502,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19470,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2170,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 301,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2418,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45774,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3706,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3516,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 223,
    "Location": "MDR"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4233,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2895,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3833,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1865,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 722,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 723,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 718,
    "Bill Date": "17-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3834,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2553,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2171,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4865,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 315,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 488,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 489,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2699,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1593,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4813,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19268,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19269,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3093,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 736,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 2700,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 490,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 725,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5432,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5592,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46361,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1376,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19270,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19360,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19361,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19362,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19271,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19272,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3517,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19363,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4866,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3419,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 726,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19503,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4107,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2528,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3835,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5433,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 373,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2896,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44904,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2897,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3707,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3708,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4867,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1866,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1867,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4004,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3646,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3647,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 727,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 491,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3836,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1969,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3837,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19365,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19366,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19367,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4820,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3838,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19364,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19471,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1594,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3311,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 492,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3280,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 493,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1862,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 998,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 56,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19504,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9489,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19472,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4234,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2527,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2529,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3141,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19368,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19369,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19370,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19371,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 798,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19372,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2172,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7485,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 523,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2173,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9490,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 524,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 31401,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 799,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 495,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 8188,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5434,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1970,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 287,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3094,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 496,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 494,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 1000,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2530,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 800,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3895,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1595,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2531,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1961,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2532,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3142,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4869,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45775,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 450,
    "Location": "BNG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9982,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44905,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 801,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 802,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2900,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5435,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4203,
    "Bill Date": "18-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5436,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2557,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1378,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3420,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 264,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3421,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42713,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42714,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2329,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4204,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3143,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4205,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4671,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Office",
    "Rec No": 4539,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 801,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4206,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44906,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2918,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2919,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1860,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19273,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1377,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2174,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19274,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19275,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44907,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4207,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19504,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5437,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 525,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1971,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19276,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19373,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19374,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4870,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19277,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19375,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19376,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19377,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19378,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19379,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19380,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1380,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19278,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4301,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2558,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19381,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4302,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19382,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2419,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4871,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 183,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3840,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19279,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19473,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1881,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19505,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19280,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LAXMANARAO",
    "Rec No": 4672,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4780,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3085,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 312,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3174,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4781,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3901,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3902,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3281,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1882,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4108,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4109,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19281,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8440,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 802,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19282,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 235,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 803,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3095,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19474,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3096,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19475,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19476,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3841,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4872,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19283,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19506,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19284,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 497,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44908,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 804,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19383,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3422,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19507,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44909,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4873,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1596,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3282,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1597,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7486,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19477,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 228,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3283,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4208,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19478,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2264,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19479,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2265,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 150,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3097,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 440,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3284,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2417,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4782,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 804,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19480,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 280,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1598,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3771,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2554,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 498,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19285,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4874,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4875,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 499,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 500,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3709,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19508,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1381,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19509,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9870,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 501,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2420,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44918,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19286,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2898,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19481,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19482,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19484,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 206,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 526,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 527,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1599,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3175,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 6258,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 150,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3285,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2760,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1600,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3286,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3772,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3144,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2461,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3098,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1601,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5438,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19510,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19384,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1602,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 502,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4876,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19484,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8441,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4209,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3287,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5439,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5442,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3176,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1603,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1962,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1604,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44911,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "BNG"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 412,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 371,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1869,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3648,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 504,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 269,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 503,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2894,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 180,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1379,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 505,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4110,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 506,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 806,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 507,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NANI",
    "Rec No": 508,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3842,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 803,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3423,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2559,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3843,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2533,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19287,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19288,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19485,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4783,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1605,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19486,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19385,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19487,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19386,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2761,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19387,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19289,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 509,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1606,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1607,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5593,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 255,
    "Location": "MDR"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2151,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19488,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 510,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3773,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2152,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46362,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1870,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44912,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4304,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2422,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2423,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2424,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3288,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19290,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1871,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3145,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VAMSHI",
    "Rec No": 2266,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 729,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3229,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4235,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5440,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3844,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5441,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46363,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3146,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2534,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43120,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3289,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2425,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 25,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 511,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2560,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4236,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 17908,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3099,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1608,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 804,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4006,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9871,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 312,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19388,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19389,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2426,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 805,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 512,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 190,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2561,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4111,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19390,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19391,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 728,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19392,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 730,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 258,
    "Location": "DMG"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 528,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 529,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1609,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1872,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4112,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1972,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2535,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4821,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1873,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19511,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 3141,
    "Bill Date": "19-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1383,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1384,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1385,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1386,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1387,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1388,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1389,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1390,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1391,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1392,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3147,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8442,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5443,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 807,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2536,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3177,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1883,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19291,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3291,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3711,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19293,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19292,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PSRK",
    "Rec No": 8705,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19294,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1874,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 530,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19295,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42716,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5444,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19511,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4237,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 731,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 58,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2562,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Gopi Kirana",
    "Rec No": 7891,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 252,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19296,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1963,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3230,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18363,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 4784,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19297,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19393,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 732,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 224,
    "Location": "BCM"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19394,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3845,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19395,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 225,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9493,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4307,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19396,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3649,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 531,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44913,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44914,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 210,
    "Location": "BNG"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9983,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4877,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19298,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 513,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 314,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 514,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 243,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 808,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3424,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 390,
    "Location": "MDR"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2763,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 515,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 330,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19299,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 806,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 807,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 516,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 808,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3148,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3650,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3425,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19300,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19397,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19398,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19601,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3846,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9872,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 413,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2537,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19602,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3847,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 200,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 809,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3149,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4305,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3231,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3290,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 3100,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3187,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3292,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2920,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 320,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19489,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19490,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19491,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19492,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19493,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2921,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 320,
    "Location": "DMG"
  },
  {
    "Coll Point": "Heritage Milk",
    "Rec No": 9873,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19603,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19399,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 800,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19604,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4113,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3293,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Roja Kirana",
    "Rec No": 4114,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19400,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3426,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3179,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19701,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3180,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19702,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 517,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1610,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 518,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1611,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3181,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3774,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18364,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1612,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3848,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1613,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3775,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3150,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9494,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4824,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4825,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3712,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3713,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 733,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3518,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18365,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4238,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18366,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 519,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3151,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3614,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 520,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3312,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2175,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3715,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3232,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19605,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4007,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 210,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19512,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RD",
    "Rec No": 5445,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1393,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19703,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3616,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1614,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3427,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19496,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 207,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 57,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19497,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46364,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19498,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45776,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 0,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3294,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KUMAR",
    "Rec No": 1964,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1615,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2563,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 59,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1616,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3233,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19704,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2538,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19499,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 240,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1617,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2539,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 734,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4239,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3777,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1618,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1619,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 210,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 521,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 560,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 522,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 523,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 315,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1620,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3182,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 810,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 810,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2922,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 809,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19705,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3143,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3144,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3145,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3146,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19500,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4306,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19801,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19802,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19803,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19804,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19805,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1875,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3778,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3152,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19513,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3849,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3779,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2427,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1876,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3780,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D R K Shope",
    "Rec No": 4210,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2428,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3234,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1621,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 524,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 525,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 526,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3295,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3850,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4878,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3851,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3781,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4302,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 600,
    "Location": "MDR"
  },
  {
    "Coll Point": "Ravindhra Reddy",
    "Rec No": 160,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3519,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3717,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3904,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3903,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3718,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1877,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3651,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3652,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 492,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4401,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 811,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1878,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Radhakrishna Kirana",
    "Rec No": 5594,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 735,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SM",
    "Rec No": 812,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43121,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 811,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3296,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3782,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4822,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3313,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 450,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 813,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4228,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19514,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 40,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19495,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 220,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42717,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "BNG"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19494,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4823,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19706,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 812,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1623,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1622,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1879,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19707,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3153,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SINDHU",
    "Rec No": 2153,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2924,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3905,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 206,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4402,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 185,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19606,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19607,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7487,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3852,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 205,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19806,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19807,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19608,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19808,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 200,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SUNIL",
    "Rec No": 2429,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1880,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3853,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "G Lakshman Rao RCBR",
    "Rec No": 46365,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45777,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 500,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19609,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8443,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1624,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1394,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3783,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9496,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44916,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1625,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44915,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 255,
    "Location": "BNG"
  },
  {
    "Coll Point": "SM",
    "Rec No": 814,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19708,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19610,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19809,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19810,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19709,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19812,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19811,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18367,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1395,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18368,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3906,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3784,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 228,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1881,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3155,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19813,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19515,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SM",
    "Rec No": 815,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2564,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4403,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 550,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 2899,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 265,
    "Location": "MDR"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3719,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8445,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1626,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3156,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4309,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2540,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1973,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19516,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3147,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3148,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3149,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 60,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 813,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "LATHA",
    "Rec No": 3150,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 500,
    "Location": "DMG"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 500,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 61,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 62,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2565,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "VV",
    "Rec No": 4240,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18369,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1974,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 527,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9495,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 230,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 528,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9497,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 529,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3157,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 190,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 530,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2541,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 531,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 532,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 532,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19814,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4310,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 534,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4405,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8528,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19611,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "MEESAVA RAVINDRA",
    "Rec No": 414,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 533,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4826,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 736,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9491,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9492,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 814,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 360,
    "Location": "BCM"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3158,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1882,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2925,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2542,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3184,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RAMBABU",
    "Rec No": 2926,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 180,
    "Location": "DMG"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1627,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "M SIVAJI",
    "Rec No": 534,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Office",
    "Rec No": 19303,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2762,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1884,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 816,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3854,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "Chanti Kiran",
    "Rec No": 737,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 152,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2330,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "RAMESH",
    "Rec No": 2331,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 84442580,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4879,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Prasad",
    "Rec No": 3907,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1883,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42718,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 205,
    "Location": "BNG"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3159,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 360,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42719,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3785,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3183,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 240,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3160,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "KRISHNA REDDY",
    "Rec No": 1404,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 129,
    "Location": "DMG"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3855,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SM",
    "Rec No": 817,
    "Bill Date": "20-Jul-20",
    "Recd Amt": 600,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 28,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1396,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1397,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1398,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3720,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1400,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1401,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1402,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 320,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1403,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1404,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "ASLAM",
    "Rec No": 3235,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "NR",
    "Rec No": 1405,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3185,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "S RAMAKRISHNA",
    "Rec No": 8527,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3186,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NTR",
    "Rec No": 2543,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Rohit Kirana",
    "Rec No": 3429,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 206,
    "Location": "MDR"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3161,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42720,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Shabber",
    "Rec No": 1975,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 160,
    "Location": "MDR"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9485,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 818,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 737,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4880,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 420,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19712,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19710,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 440,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 816,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2176,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 120,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19711,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19713,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 738,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3721,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 739,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SEETHAIAH",
    "Rec No": 3722,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SM",
    "Rec No": 819,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2764,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 280,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8446,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Thirupathi Rao TMPL",
    "Rec No": 42721,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 817,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 818,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Vijaya Dairy",
    "Rec No": 3187,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9985,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "T PANI KUMAR",
    "Rec No": 9984,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3856,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4881,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 819,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3635,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 340,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43122,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19612,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 46250,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2765,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 290,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19613,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 535,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 840,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SURI",
    "Rec No": 3162,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19614,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 400,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3298,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19714,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 260,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19615,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Nagahari",
    "Rec No": 3776,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Padma Medicals",
    "Rec No": 1885,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "T RAJESH",
    "Rec No": 740,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19616,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19715,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "D Lakshman Rao MDPD",
    "Rec No": 43123,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 225,
    "Location": "BNG"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 64,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 290,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19815,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2766,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 65,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19816,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 205,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "CH RANJITH KUMAR",
    "Rec No": 0,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 0,
    "Location": "BCM"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19818,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19716,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGESWARAO",
    "Rec No": 66,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 820,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19617,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1884,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 536,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 537,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 340,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 821,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19618,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3857,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 492,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3314,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 218,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19619,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 320,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18370,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19717,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "AKULA RAMU",
    "Rec No": 7488,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 538,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 212,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 539,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19817,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19620,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44918,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2568,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "HMN",
    "Rec No": 1885,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19621,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Mrs Padma",
    "Rec No": 3108,
    "Bill Date": "",
    "Recd Amt": 0,
    "Location": "MDR"
  },
  {
    "Coll Point": "Seetharamaya",
    "Rec No": 3315,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 7956,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "P LAXMI NARAYANA",
    "Rec No": 8447,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM"
  },
  {
    "Coll Point": "Ushasri BNGM",
    "Rec No": 44919,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 200,
    "Location": "BNG"
  },
  {
    "Coll Point": "NARESH",
    "Rec No": 815,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "BCM"
  },
  {
    "Coll Point": "Krishnareddy",
    "Rec No": 2767,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1628,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4407,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "D Kishore",
    "Rec No": 4408,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4827,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SAMPATH",
    "Rec No": 4828,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 540,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SRINU",
    "Rec No": 2567,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "DMG"
  },
  {
    "Coll Point": "KKP",
    "Rec No": 9498,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "SPL Off",
    "Rec No": 541,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1629,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "Venkat",
    "Rec No": 3858,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3299,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 260,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19622,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Ramesh Kirana",
    "Rec No": 4008,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "Subhani",
    "Rec No": 45778,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BNG"
  },
  {
    "Coll Point": "Prabanjan Medical",
    "Rec No": 3297,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "sunandini Milk",
    "Rec No": 4311,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 250,
    "Location": "MDR"
  },
  {
    "Coll Point": "Vasu on line",
    "Rec No": 3520,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19819,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19820,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19821,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 546,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "DWARAKA",
    "Rec No": 4882,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "PRADEEP",
    "Rec No": 19822,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "NAGENDRAN",
    "Rec No": 19623,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Baburao",
    "Rec No": 2177,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "MDR"
  },
  {
    "Coll Point": "NAVEEN",
    "Rec No": 18371,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "BCM-2"
  },
  {
    "Coll Point": "Thallada",
    "Rec No": 1630,
    "Bill Date": "21-Jul-20",
    "Recd Amt": 300,
    "Location": "SPL-TLD"
  },
  {
    "Coll Point": "RANI",
    "Rec No": 19718,
    "Bill Date": "21-Jul-20",
  },
  {