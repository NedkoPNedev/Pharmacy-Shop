package pharmacyshop.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "pharmacy_company")
public class Company {

    @Id
    @Column(name = "company_name")
    private String companyName;

    @Column(name = "address")
    private String companyAddress;

    @Column(name = "phone_number")
    private String companyPhoneNumber;

    @OneToMany(mappedBy = "pharmCompany")
    private Set<PharmClass> pharmClasses;

    public Company() {}

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
