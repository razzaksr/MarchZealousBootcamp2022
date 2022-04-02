package backend.poc.first.POC1BackEnd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// Resource obj=new Resource();
//System.out.println(obj);
@Entity
public class Resource 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int resId;
	private String resName;
	private String[] resSkills;
	private int resPay;
	private String resArea;
	
	public Resource() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Resource(String resName, String[] resSkills, int resPay, String resArea) {
		super();
		this.resName = resName;
		this.resSkills = resSkills;
		this.resPay = resPay;
		this.resArea = resArea;
	}
	@Override
	public String toString() {
		return "Resource [resId=" + resId + ", resName=" + resName + ", resSkills=" + Arrays.toString(resSkills)
				+ ", resPay=" + resPay + ", resArea=" + resArea + "]";
	}
	public String[] getResSkills() {
		return resSkills;
	}
	public void setResSkills(String[] resSkills) {
		this.resSkills = resSkills;
	}
	public int getResId() {
		return resId;
	}
	public void setResId(int resId) {
		this.resId = resId;
	}
	public String getResName() {
		return resName;
	}
	public void setResName(String resName) {
		this.resName = resName;
	}
	
	public int getResPay() {
		return resPay;
	}
	public void setResPay(int resPay) {
		this.resPay = resPay;
	}
	public String getResArea() {
		return resArea;
	}
	public void setResArea(String resArea) {
		this.resArea = resArea;
	}
}
