package pharmacyshop.dto;

import pharmacyshop.entity.Company;
import pharmacyshop.entity.PharmClass;

import java.util.Set;

public class CompanyDTO {

    private String companyName;

    private String companyAddress;

    private String companyPhoneNumber;

    private Set<PharmClass> pharmClasses;

    public CompanyDTO(Company company) {
        this.companyName = company.getCompanyName();
        this.companyAddress = company.getCompanyAddress();
        this.companyPhoneNumber = company.getCompanyPhoneNumber();
        this.pharmClasses = company.getPharmClasses();
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getCompanyPhoneNumber() {
        return companyPhoneNumber;
    }

    public void setCompanyPhoneNumber(String companyPhoneNumber) {
        this.companyPhoneNumber = companyPhoneNumber;
    }

    public Set<PharmClass> getPharmClasses() {
        return pharmClasses;
    }

    public void setPharmClasses(Set<PharmClass> pharmClasses) {
        this.pharmClasses = pharmClasses;
    }
}
