package pharmacyshop.entity;

import javax.persistence.*;

@Entity
@Table(name = "medicine")
public class Medicine {

    @Column(name = "inn")
    private String INN;

    @Id
    @Column(name = "trademark")
    private String trademark;

    @Column(name = "pharmacological_effect")
    private String pharmacologicalEffect;

    @Column(name = "price")
    private Double medicinePrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pharmacological_class_id")
    private PharmClass pharmClass;

    public Medicine() {}

    public String getINN() {
        return INN;
    }

    public void setINN(String INN) {
        this.INN = INN;
    }

    public String getTrademark() {
        return trademark;
    }

    public void setTrademark(String trademark) {
        this.trademark = trademark;
    }

    public String getPharmacologicalEffect() {
        return pharmacologicalEffect;
    }

    public void setPharmacologicalEffect(String pharmacologicalEffect) {
        this.pharmacologicalEffect = pharmacologicalEffect;
    }

    public Double getMedicinePrice() {
        return medicinePrice;
    }

    public void setMedicinePrice(Double medicinePrice) {
        this.medicinePrice = medicinePrice;
    }

    public PharmClass getPharmClass() {
        return pharmClass;
    }

    public void setPharmClass(PharmClass pharmClass) {
        this.pharmClass = pharmClass;
    }
}
