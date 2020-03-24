package pharmacyshop.dto;

public class SampleDTO {
    private Long a;
    private String b;

    public SampleDTO() {}

    public SampleDTO(Long a, String b) {
        this.a = a;
        this.b = b;
    }

    public Long getA() {
        return a;
    }

    public void setA(Long a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }
}
