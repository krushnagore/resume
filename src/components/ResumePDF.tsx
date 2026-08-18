import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { resumeData } from "@/data/resume";

const styles = StyleSheet.create({
    page: {
        paddingTop: 28,
        paddingBottom: 28,
        paddingHorizontal: 32,
        fontFamily: "Helvetica",
        fontSize: 9.5,
        color: "#1e293b",
        backgroundColor: "#ffffff",
    },
    // Header
    header: {
        borderBottomWidth: 1.5,
        borderBottomColor: "#0f172a",
        paddingBottom: 10,
        marginBottom: 12,
    },
    name: {
        fontSize: 22,
        fontFamily: "Helvetica-Bold",
        color: "#0f172a",
        textTransform: "uppercase",
        letterSpacing: 0.5,
        marginBottom: 3,
    },
    role: {
        fontSize: 12,
        fontFamily: "Helvetica-Bold",
        color: "#475569",
        marginBottom: 6,
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        fontSize: 9,
        color: "#475569",
        gap: 12,
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    link: {
        color: "#2563eb",
        textDecoration: "none",
    },
    // Sections
    section: {
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 11,
        fontFamily: "Helvetica-Bold",
        color: "#0f172a",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        borderBottomWidth: 1,
        borderBottomColor: "#cbd5e1",
        paddingBottom: 3,
        marginBottom: 6,
    },
    // Text elements
    summaryText: {
        fontSize: 9.5,
        lineHeight: 1.4,
        color: "#334155",
    },
    // Experience
    jobItem: {
        marginBottom: 8,
    },
    jobHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 2,
    },
    jobTitleGroup: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 10.5,
        fontFamily: "Helvetica-Bold",
        color: "#0f172a",
    },
    companyName: {
        fontSize: 9.5,
        fontFamily: "Helvetica-Bold",
        color: "#334155",
    },
    jobMeta: {
        fontSize: 8.5,
        color: "#64748b",
        textAlign: "right",
    },
    bulletList: {
        marginTop: 2,
        paddingLeft: 4,
    },
    bulletItem: {
        flexDirection: "row",
        marginBottom: 2,
        lineHeight: 1.35,
    },
    bulletDot: {
        width: 10,
        fontSize: 9,
        color: "#475569",
    },
    bulletText: {
        flex: 1,
        fontSize: 9,
        color: "#334155",
    },
    // Projects
    projectItem: {
        flexDirection: "row",
        marginBottom: 3,
        lineHeight: 1.35,
    },
    // Skills
    skillGroup: {
        flexDirection: "row",
        marginBottom: 4,
        lineHeight: 1.35,
    },
    skillLabel: {
        width: 170,
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        color: "#0f172a",
    },
    skillValue: {
        flex: 1,
        fontSize: 9,
        color: "#334155",
    },
    // Education
    educationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
});

export const ResumePDF = () => {
    const { name, role, phone, email, location, linkedin, linkedinUrl, summary, experience, projects, education, skills } = resumeData;

    return (
        <Document title={`${name} - Resume`} author={name} subject={`${name} ${role}`}>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.role}>{role}</Text>
                    <View style={styles.contactRow}>
                        <Text>Phone: {phone}</Text>
                        <Text>|</Text>
                        <Text>
                            Email: <Link style={styles.link} src={`mailto:${email}`}>{email}</Link>
                        </Text>
                        <Text>|</Text>
                        <Text>Location: {location}</Text>
                        <Text>|</Text>
                        <Text>
                            LinkedIn: <Link style={styles.link} src={linkedinUrl}>{linkedin}</Link>
                        </Text>
                    </View>
                </View>

                {/* Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Summary</Text>
                    <Text style={styles.summaryText}>{summary}</Text>
                </View>

                {/* Experience */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {experience.map((job, index) => (
                        <View key={index} style={styles.jobItem} wrap={false}>
                            <View style={styles.jobHeader}>
                                <View style={styles.jobTitleGroup}>
                                    <Text style={styles.jobTitle}>{job.role}</Text>
                                    <Text style={styles.companyName}>{job.company}</Text>
                                </View>
                                <View style={styles.jobMeta}>
                                    <Text>{job.location} | {job.type}</Text>
                                    <Text>{job.period}</Text>
                                </View>
                            </View>
                            <View style={styles.bulletList}>
                                {job.achievements.map((achievement, i) => (
                                    <View key={i} style={styles.bulletItem}>
                                        <Text style={styles.bulletDot}>•</Text>
                                        <Text style={styles.bulletText}>{achievement}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                {/* Projects */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Project Highlights</Text>
                    {projects.map((project, index) => (
                        <View key={index} style={styles.projectItem} wrap={false}>
                            <Text style={styles.bulletDot}>•</Text>
                            <Text style={styles.bulletText}>{project}</Text>
                        </View>
                    ))}
                </View>

                {/* Education */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <View style={styles.educationRow} wrap={false}>
                        <View>
                            <Text style={styles.jobTitle}>{education.degree}</Text>
                            <Text style={styles.companyName}>{education.college}</Text>
                        </View>
                        <View style={styles.jobMeta}>
                            <Text>{education.university}</Text>
                            <Text>{education.year}</Text>
                        </View>
                    </View>
                </View>

                {/* Technical Skills */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Technical Skills</Text>
                    <View wrap={false}>
                        <View style={styles.skillGroup}>
                            <Text style={styles.skillLabel}>NetSuite Development & Customization:</Text>
                            <Text style={styles.skillValue}>{skills.netsuite.join(", ")}</Text>
                        </View>
                        <View style={styles.skillGroup}>
                            <Text style={styles.skillLabel}>Programming:</Text>
                            <Text style={styles.skillValue}>{skills.programming.join(", ")}</Text>
                        </View>
                        <View style={styles.skillGroup}>
                            <Text style={styles.skillLabel}>Integrations:</Text>
                            <Text style={styles.skillValue}>{skills.integrations.join(", ")}</Text>
                        </View>
                        <View style={styles.skillGroup}>
                            <Text style={styles.skillLabel}>Tools:</Text>
                            <Text style={styles.skillValue}>{skills.tools.join(", ")}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
