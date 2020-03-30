package pharmacyshop.dto;


import pharmacyshop.entity.Medicine;

public class MedicineDTO {

    private String INN;

    private String trademark;

    private String pharmacologicalEffect;

    private Double medicinePrice;

    public MedicineDTO(Medicine medicine) {
        this.INN = medicine.getINN();
        this.trademark = medicine.getTrademark();
        this.pharmacologicalEffect = medicine.getPharmacologicalEffect();
        this.medicinePrice = medicine.getMedicinePrice();
    }

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
}
