package pharmacyshop.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "pharmacological_class")
public class PharmClass {

    @Id
    @Column(name = "class_id")
    private int id;

    @Column(name = "class_name")
    private String className;

    @Column(name = "class_description")
    private String classDescription;

    @OneToMany(mappedBy = "pharmClass")
    private Set<Medicine> medicines;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_name")
    private Company pharmCompany;

    public PharmClass() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getClassDescription() {
        return classDescription;
    }

    public void setClassDescription(String classDescription) {
        this.classDescription = classDescription;
    }

    public Set<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(Set<Medicine> medicines) {
        this.medicines = medicines;
    }

    public Company getPharmCompany() {
        return pharmCompany;
    }

    public void setPharmCompany(Company pharmCompany) {
        this.pharmCompany = pharmCompany;
    }
}
