// ResumePDF.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Updated Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFEBF3',
    padding: 50,           // Increased padding
    fontSize: 10.5,        // Increased font size
    fontFamily: 'Helvetica',
    color: '#000',
    lineHeight: 1.8,       // More readable line height
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 6,
    color: '#333',
  },
  contact: {
    fontSize: 9,
    marginBottom: 20,
    color: '#555',
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
    borderBottom: '1px solid #000',
    paddingBottom: 3,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  entryTitle: {
    fontSize: 10.2,
    fontWeight: 'bold',
  },
  entryDate: {
    fontSize: 9,
    color: '#666',
  },
  bullet: {
    marginLeft: 8,
    fontSize: 9,
  },
  projectDesc: {
    marginBottom: 6,
    fontSize: 9.5,
  }
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.name}>Prathiksha Mohan</Text>
        <Text style={styles.title}>Undergraduate</Text>
        <Text style={styles.contact}>
          Email: prathiksha.mohan100@gmail.com | GitHub: github.com/PrathikshaMohan | LinkedIn: linkedin.com/in/prathiksha-mohan-pm01
        </Text>
      </View>

      {/* Objective */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective</Text>
        <Text>
          A passionate and detail-oriented undergraduate IT student aiming to apply technical skills in real-world projects. I seek opportunities to enhance my knowledge in full-stack development and contribute to impactful, user-focused solutions.
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.entryHeader}>
          <Text style={styles.entryTitle}>Higher National Diploma in IT - SLIATE Kandy</Text>
          <Text style={styles.entryDate}>Present – 2025</Text>
        </View>
        <View style={styles.entryHeader}>
          <Text style={styles.entryTitle}>G.C.E Advanced Level Examination - Girl's High School Kandy</Text>
          <Text style={styles.entryDate}>2021</Text>
        </View>
        <View style={styles.entryHeader}>
          <Text style={styles.entryTitle}>G.C.E Ordinary Level Examination - Girl's High School Kandy</Text>
          <Text style={styles.entryDate}>2018</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={{ marginBottom: 3 }}>Languages: English, Sinhala, Tamil</Text>
        <Text style={{ marginBottom: 3 }}>Soft skills: Teamwork, Time management, Communication, Adaptability, Problem solving</Text>
        <Text>Technologies: HTML, CSS, JavaScript, Java, PHP, React.js, Node.js, MySQL, Git</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Farmers' Market System – </Text>
          A full-stack platform for farmers and buyers with product listings, cart, order placement, notifications, and role-based dashboards using React, Node.js, and MySQL.
        </Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Personal Portfolio Website – </Text>
          A responsive, cleanly designed first-year project to showcase my projects, skills, and contact info with a contact form, built using HTML, CSS, PHP, and MySQL.
        </Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Bus Booking Website – </Text>
          A web-based app with user login, schedule management, seat booking, and fare calculation, built using HTML, CSS, JavaScript, PHP, and MySQL.
        </Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Library Management System – </Text>
          A Java Swing desktop app to manage books, authors, and members with CRUD operations, borrowing/returning, and search functionality using MySQL.
        </Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Student Result Management System – </Text>
          A role-based website for storing and retrieving student results with secure database integration, built using HTML, CSS, PHP, and MySQL.
        </Text>
        <Text style={styles.projectDesc}>
          <Text style={{ fontWeight: 'bold' }}>Photography and Graphic Website – </Text>
          A simple, visually appealing site showcasing graphic design and photography services, built with HTML and CSS.
        </Text>
      </View>

    </Page>
  </Document>
);

export default ResumePDF;
