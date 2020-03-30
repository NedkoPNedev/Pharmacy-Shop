package pharmacyshop.dto;

import pharmacyshop.entity.Medicine;
import pharmacyshop.entity.PharmClass;

import java.util.Set;

public class PharmClassDTO {

    private int id;

    private String className;

    private String classDescription;

    private Set<Medicine> medicines;

    public PharmClassDTO(PharmClass pharmClass) {
        this.id = pharmClass.getId();
        this.className = pharmClass.getClassName();
        this.classDescription = pharmClass.getClassDescription();
        this.medicines = pharmClass.getMedicines();
    }

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
}
