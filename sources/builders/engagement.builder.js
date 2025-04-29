import { faker } from '@faker-js/faker';

// атрибуты Engagement
export class EngagementBuilder {
    addCustomName() {
        this.customNameEng = faker.word.words(5);
        return this;
    }

    addDepartmentId() {
        this.departmentIdEng = "4ed1fcb3-96ad-4a2f-be79-2fda08f90544";
        return this;        
    }

    addDepartmentName() {
        this.departmentNameEng = "Отдел аудита финансового сектора";
        return this;
    }

    addType() {
        this.typeNameEng = "Согласованные процедуры";
        return this;
    }

    addReportingStandard() {
        this.reportingStandardNameEng = "УП Группы";
        return this;        
    }

    addVerificationPeriods() {
        this.verificationPeriodsEng = "3 мес";
        return this;        
    }

    addVerificationYear() {
        this.verificationYearEng = 2025;
        return this;        
    }

    createEngagement() {
        return {
            name: this.customNameEng,
            departmentName: this.departmentNameEng,
            type: this.typeNameEng,
            reportingStandard: this.reportingStandardNameEng,
            verificationPeriods: this.verificationPeriodsEng,
            verificationYear: this.verificationYearEng
        }
    }

    updateEngagement() {
        return {
            name: this.customNameEng,
            departmentId: this.departmentIdEng
        }
    }
}